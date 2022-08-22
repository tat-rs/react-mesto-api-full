import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup ';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupConfirmation from './PopupConfirmation';
import Login from './Login';
import Register from './Register';
import InfoToolTip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';
import auth from '../utils/auth';
import {useScrollLock} from '../hooks/useScrollLock'
import { ERROR_LOGIN, ERROR_REGISTER } from '../utils/constants';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false); //состояние попапа "обновить аватар"

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); //состояние попапа "редактировать профиль"

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false); //состояние попапа "добавить карточку"

  const [isPopupConfirmationOpen, setIsPopupConfirmationOpen] = React.useState(false); //состояние попапа "подтвердить удаление карточки"

  const [selectedCard, setSelectedCard] = React.useState({}) //состояние попапа с изображением

  const [currentUser, setCurrentUser] = React.useState({
      about: "",
      avatar: "",
      cohort: "",
      name: "",
      _id: "",
  }); //стейт текущих данных пользователя

  const [cards, setCards] = React.useState([]);//хук состояния карточки 

  const [isLoggedIn, setLoggedIn] = React.useState(false); //стейт, содержащий инф-ию о статусе пользователя

  const [isInfoToolTipOpen, setInfoToolTipOpen] = React.useState(false); //состояние попапа результата регистрации

  const [isSuccess, setSuccess] = React.useState(false); //состояние переменной об успешной/неуспешной регистрации

  const [isMenuOpen, setMenuOpen] = React.useState(false); //состояние переменной открытия меню

  const [message, setMessage] = React.useState(''); //текст сообщения при регистрации и входе

  const {lockScroll, unlockScroll} = useScrollLock(); //скролл и отмена скролла

  const userEmail = localStorage.getItem('email');

  const history = useHistory();

  //проверка токена пользователя
  function tokenCheck() {
    if(userEmail){
      auth.getContent()
        .then((data) => data)
        .then((res) => {
          if(res?.email)
          localStorage.setItem('email', res.email); //обновили стейт эл. почты пользователя
          handleLogin(); //обновлен статус пользователя - зарегистрирован
          history.push('/'); //переадресация на страницу пользователя
        })
        .catch(err => console.log(err))
    }
  }

  console.log(currentUser)

  React.useEffect(() => {

    if(isLoggedIn && userEmail) {
      Promise.all([api.getAllCards(), api.getUserInfo()])
        .then(([cardData, userData]) => {
          setCards(cardData);
          setCurrentUser(userData);
        })
        .catch(err => console.log(err))
    }
 
    tokenCheck();//проверка токена
    
  }, [isLoggedIn, userEmail])

  //обработчик открытия попапа редактирования аватара профиля
  function handleEditAvatarClick() {
    lockScroll()
    setIsEditAvatarPopupOpen(true)
  }

  //обработчик открытия попапа редактирования профиля
  function handleEditProfileClick() {
    lockScroll()
    setIsEditProfilePopupOpen(true)
  }

  //обработчик открытия попапа добавления новой карточки
  function handleAddPlaceClick() {
    lockScroll()
    setIsAddPlacePopupOpen(true)
  }
  
  //обработчик клика по карточке
  function handleCardClick(card) {
    lockScroll()
    setSelectedCard(card)
  }

  //обработчик открытия попапа подтверждения удаления карточки
  function handlePopupConfirmationClick() {
    lockScroll()
    setIsPopupConfirmationOpen(true)
  }

  //обработчик статуса пользователя
  function handleLogin() {
    setLoggedIn(true)
  }

  function handleMenuClick() {
    setMenuOpen(!isMenuOpen)
  }

  //сброс состояний переменных
  function closeAllPopups() {
    setInfoToolTipOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
    setIsPopupConfirmationOpen(false)
    unlockScroll()
    setMenuOpen(false)
  }

  //обработчик модального окна успешной/неуспешной регистрации
  function handleInfoTooltipClick() {
    setInfoToolTipOpen(true);
  }

  //обновление данных пользователя(имя, описание)
  function handleUpdateUser(data) {
    // Отправляем запрос в API и получаем отредактированные данные пользователя
    api.setUserInfo(data)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  //обновление аватара пользователя
  function handleUpdateAvatar(data) {
    // Отправляем запрос в API и получаем обновленный аватар пользователя
    api.setUserAvatar(data)
    .then((userData) => {
      setCurrentUser(userData); //обновили ccылку на аватар пользователя
      closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  //функция постановки лайка/дизлайк
  function handleCardLike(card) {
    const isLiked = card.likes.some(element => element === currentUser._id); // проверяем, поставлен ли лайк пользователем на карточке
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((element) => element._id === card._id ? newCard : element));
    })
    .catch(err => console.log(err))
  }
  
  //функция удаления карточки
  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые массив карточек
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter(element => element._id !== card._id)) //отфильтровали карточки по которым айди не совпали при клике на удаление
      closeAllPopups()
    })
    .catch(err => console.log(err));
  }

  //функция добавления карточки
  function handleAddPlaceSubmit(card) {
    // Отправляем запрос в API и получаем обновлённый массив карточек
    api.addNewCard(card)
    .then((newAddPlace) => {
      setCards([newAddPlace, ...cards]); //обновили стейт карточек
      closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  //функция перехода на страницу пользователя
  function onLogin(userEmail, userPassword) {

    auth.authorize(userEmail, userPassword)
      .then((data) => {
        if(data?.token) {
          localStorage.setItem('email', userEmail);//сохранили эл. почту пользователя
          handleLogin();//статус пользователя - зарегистрирован
          history.push('/'); //переадресация на основную страницу
        } else {
          handleInfoTooltipClick(); //открытие модального окна с ошибкой
          setSuccess(false);
          setMessage(ERROR_LOGIN);
        }
      })
      .catch((err) => console.log(err));
  }

  function onRegister(userEmail, userPassword) {
    
    auth.register(userEmail, userPassword)
      .then((res) => {
        if(res) {
          setSuccess(true); //сообщение об успешной регистраци
          handleInfoTooltipClick(); //открытие модального окна
          history.push('/sign-in');
        } else {
          handleInfoTooltipClick(); //открытие модального окна
          setSuccess(false); //сообщение о проблеме при регистраци
          setMessage(ERROR_REGISTER);
        }
      })
      .catch((err) => console.log(err));

  }
  
  //функция выхода из системы
  function signOutClick(){
    auth.logout()
      .then(res => res)
      .catch(err => console.log(err));

    localStorage.removeItem('email'); //удалили токен
    setLoggedIn(false); // обновили статус пользователя
    history.push('/sign-in');//переадресация на странцицу входа
  }

  return (
    <div className='page__content'>
      <CurrentUserContext.Provider value={currentUser}>

      <Header isLoggedIn={isLoggedIn} useremail={userEmail} signOutClick={signOutClick} handleMenuClick={handleMenuClick} closeAllPopups={closeAllPopups} isMenuOpen={isMenuOpen} />
      
        <Switch>

          <ProtectedRoute
            exact path='/'
            isLoggedIn={isLoggedIn}
            component={() => <Main 
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onBtnDelete={handlePopupConfirmationClick}
            />}
          />

          <ProtectedRoute
            exact path='/'
            isLoggedIn={isLoggedIn}
            component={Footer}
          />

          <Route path='/sign-up'>
            <Register title='Регистрация' textOfButton='Зарегистрироваться' onRegister={onRegister}/>          
          </Route>

          <Route path='/sign-in'>
            <Login title='Войти' textOfButton='Войти' onLogin={onLogin} />
          </Route>

        </Switch>

        <InfoToolTip isOpen={isInfoToolTipOpen} onClose={closeAllPopups} isSuccess={isSuccess} message={message} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} textOfButton='Сохранить'/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} textOfButton='Создать'/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} textOfButton='Сохранить' />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <PopupConfirmation isOpen={isPopupConfirmationOpen} onClose={closeAllPopups} card={selectedCard} textOfButton="Да" removeCard={handleCardDelete}/>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;

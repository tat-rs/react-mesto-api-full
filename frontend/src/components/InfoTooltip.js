import React from "react";
import iconSuccess from '../images/icon-success.svg'
import iconError from '../images/icon-error.svg'
import { SUCCESS_REGISTER } from "../utils/constants";

function InfoToolTip(props) {
  
  return (
    <>
    <div className={`popup ${props.isOpen ? 'popup_opened' : '' }`} onMouseDown={props.onClose}>
        <div className='popup__container' onMouseDown ={(evt) => evt.stopPropagation()}>
          <button className='popup__close link' type='button' aria-label='Закрыть форму' onClick={props.onClose}></button>
          <div className="popup__result result">
            <img className="result__image" src={props.isSuccess ? iconSuccess : iconError} alt={props.isSuccess ? 'Успешный результат' : 'Отрицательный результат'}/>
            <p className="result__text">{props.isSuccess ? SUCCESS_REGISTER : props.message}</p>
          </div>         
        </div>
      </div>
    </>
  )
}

export default InfoToolTip
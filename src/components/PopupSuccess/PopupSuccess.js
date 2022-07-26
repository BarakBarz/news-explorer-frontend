import React from 'react';
import Popup from '../Popup/Popup';
import './PopupSuccess.css';

export default function PopupSuccess({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  switchPopups,
}) {
  const handleOrClick = () => {
    switchPopups();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name}>
      <h3
        className={`popup__title popup__title_type_${name}`}>
        {title}
      </h3>
      <p className='popup__link' onClick={handleOrClick}>
        {buttonText}
      </p>
    </Popup>
  );
}


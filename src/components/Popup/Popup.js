import { useEffect } from 'react';
import './Popup.css';

const Popup = ({ isOpen, name, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? 'popup_visible' : ''} popup_type_${name} `}
      onMouseDown={handleOverlay}>
      <div className={`popup__box popup__box_type_${name}`}>
        {children}

        <button
          type='button'
          aria-label='Close'
          onClick={onClose}
          className='popup__close-btn'
        />
      </div>
    </div>
  );
};

export default Popup;

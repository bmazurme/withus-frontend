import React from 'react';
import { IPopupProps } from './IPopupProps';

function Popup({ onClose, text, isOpen }: IPopupProps) {
  return (
    <div
      className={`popup popup_tooltip ${isOpen ? 'popup_active' : ''}`}
    >
      <div className="popup__container">
        <button
          aria-label="Close"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <div className="tooltip">
          <p className="popup__title">{text.title}</p>
          <p className="popup__text">{text.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;

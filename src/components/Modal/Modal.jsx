import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Modal({ src, alt, toggleModal }) {
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleEscPress = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [toggleModal]);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
        <button
          type="button"
          className={css.closeBtn}
          onClick={() => toggleModal()}
        >
          <AiOutlineCloseCircle
            style={{ fill: 'white', width: '48px', height: '48px' }}
          />
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem( { src, alt, modalSrc } ) {
   const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(value => !value)
  };

    return (
      <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={src}
          alt={alt}
          onClick={toggleModal}
        />
      </li>
      {showModal && <Modal src={modalSrc} alt={alt} toggleModal={toggleModal}/> }
      </>
    );

}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  modalSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
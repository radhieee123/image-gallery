import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageGallery = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="gallery" style={{display : "grid", gridTemplateColumns : "auto auto auto", gridColumnGap:"10px"}}>
      {images.map((image) => (
        <div key={image.id} className="thumbnail" onClick={() => openModal(image)}>
          <img src={image.url} alt={image.caption} />
        </div>
      ))}

      <Modal open={modalOpen} onClose={closeModal} center>
        {selectedImage && (
          <Carousel showThumbs={true} selectedItem={selectedImage.id - 1} showIndicators>
            {images.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={image.caption} />
                <p className="legend">{image.caption}</p>
              </div>
            ))}
          </Carousel>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
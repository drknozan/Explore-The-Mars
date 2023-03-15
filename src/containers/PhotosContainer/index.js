import PhotosItem from '@/components/PhotosItem';
import { useState } from 'react';
import styles from './photosContainer.module.css';
import ImageModal from '@/components/ImageModal';
import { motion } from 'framer-motion';

const PhotosContainer = ({ photos }) => {
  const [modal, setModal] = useState(null);

  const showModal = (img) => {
    setModal(img);
  };

  const closeModal = () => {
    setModal(null);
  };

  if (photos.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h1>
          Unfortunately, no photos found for today. You can try again tomorrow.
        </h1>
      </div>
    );
  }

  return (
    <>
      {modal && <ImageModal closeModal={closeModal} modal={modal} />}
      <div className={styles.container} style={{ opacity: modal ? 0.1 : 1 }}>
        <motion.div
          className={styles.photosContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          {photos.map((p) => {
            return (
              <PhotosItem
                key={p.id}
                id={p.id}
                cameraName={p.camera.full_name}
                earthDate={p.earth_date}
                imgSrc={p.img_src}
                roverName={p.rover.name}
                showModal={showModal}
              />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default PhotosContainer;

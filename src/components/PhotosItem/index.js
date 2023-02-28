import styles from './photosItem.module.css';

const PhotosItem = ({
  id,
  cameraName,
  earthDate,
  imgSrc,
  roverName,
  showModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer} onClick={() => showModal(imgSrc)}>
        <img src={imgSrc} width={400} height={400} alt="RoverPhoto"></img>
      </div>
      <div className={styles.infos}>
        <p>Rover Name: {roverName}</p>
        <p>Camera Name: {cameraName}</p>
        <p>Earth Date: {earthDate}</p>
        <p>Photo Id: {id}</p>
      </div>
    </div>
  );
};

export default PhotosItem;

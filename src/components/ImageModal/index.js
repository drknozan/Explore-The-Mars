import styles from "./imagemodal.module.css";
import Image from "next/image";

const ImageModal = ({ closeModal, modal }) => {
    return(
        <div className={styles.modal}>
            <div className={styles.modalGroup}>
                <div className={styles.modalImgContainer}>
                    <Image src={modal} fill className={styles.modalImg} alt="RoverPhoto"></Image>
                </div>
                <button className={styles.modalButton} onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default ImageModal;
import styles from "./contact.module.css";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div id="contact" className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <div className={styles.emailContainer}>
                <MdOutlineEmail size={28} />
                <p>drknozan@gmail.com</p>
            </div>
        </div>
    );
}
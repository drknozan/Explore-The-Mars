import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md"

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <div className={styles.header}>
           <Link href="/" className={styles.logoLink}>
                <div className={styles.logo}>
                    <p className={styles.logoTextUp}>Explore</p><p className={styles.logoTextDown}>The Mars</p>
                </div>
           </Link>
            <div className={displayMenu ? styles.menu_active : styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/rover-photos">Mars Photos</Link>
                <Link href="#">Contact</Link>
            </div>
            <MdMenu className={styles.toggle} size={32} onClick={() => setDisplayMenu(!displayMenu)} />
        </div>
    )
}

export default Header;
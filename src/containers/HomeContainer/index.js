import styles from './homeContainer.module.css';
import { MdChevronRight } from 'react-icons/md';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '@/components/Contact';

const HomeContainer = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Explore The Mars'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <div className={styles.typeWrap}>
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
          <h2>Photos coming from Curiosity rover.</h2>
          <Link href="/rover-photos" className={styles.bannerButton}>
            Start <MdChevronRight size={28} />
          </Link>
        </div>
        <div className={styles.imgContainer}>
          <Image
            priority
            unoptimized
            src="/astronaut.jpg"
            alt="Astronaut"
            fill
          ></Image>
        </div>
      </div>
      <hr />
      <div className={styles.banner}>
        <div className={styles.imgContainer}>
          <Image priority unoptimized src="/mars.jpg" alt="Mars" fill></Image>
        </div>
        <div className={styles.bannerText}>
          <h1>MARS.</h1>
          <h2>Photos from five days ago, daily updated.</h2>
          <Link href="/rover-photos" className={styles.bannerButton}>
            Explore <MdChevronRight size={28} />
          </Link>
        </div>
      </div>
      <hr></hr>
      <Contact />
    </div>
  );
};

export default HomeContainer;

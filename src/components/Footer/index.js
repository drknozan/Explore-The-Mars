import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        All photos are coming from Nasa api:{' '}
        <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
      </div>
      <div>
        Made by <a href="https://github.com/drknozan">drknozan</a> in 2023.
      </div>
    </div>
  );
};

export default Footer;

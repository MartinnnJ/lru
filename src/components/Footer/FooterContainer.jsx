import styles from './FooterContainer.module.scss';

export default function FooterContainer({ children }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        {children}
      </div>
      <div className={styles['footer-container__copyright']}>
        <small>{year} LRU. All rights reserved.</small> <span>|</span>
        <small>Podmienky používania</small> <span>|</span>
        <small>GDPR</small>
      </div>
    </footer>
  );
}
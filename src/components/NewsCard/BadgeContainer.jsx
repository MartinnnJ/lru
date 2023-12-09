import styles from './BadgeContainer.module.scss';

export default function BadgeContainer({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles['container__scroll-x']}>
        {children}
      </div>
    </div>
  );
}
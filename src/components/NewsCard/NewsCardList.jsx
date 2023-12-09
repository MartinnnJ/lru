import LruLink from '../LruLink';
import styles from './NewsCardList.module.scss';

export default function NewsCardList({ children, title }) {
  return (
    <div className={styles.list}>
      <h1 className={styles.list__title}>{title}</h1>
      <div className={styles.list__items}>{children}</div>
      <div className={styles.list__navigation}>
        <LruLink
          to="/"
          size={1.5}
          weight={600}
        >
          Zobraziť všetky
        </LruLink>
      </div>
    </div>
  );
}
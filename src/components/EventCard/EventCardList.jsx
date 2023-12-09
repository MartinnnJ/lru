import LruLink from '../LruLink';
import styles from './EventCardList.module.scss';

export default function EventCardList({ children, title }) {
  return (
    <div className={styles.container}>

      <h1 className={styles.container__title}>
        {title}
      </h1>

      <div className={styles.container__items}>
        <div className={styles['container__scroll-x']}>
          {children}
        </div>
      </div>

      <div className={styles.container__navigation}>
        <LruLink
          to="/"
          size={1.5}
          weight={600}
        >
          Zobraziť všetky
        </LruLink>
      </div>

    </div>
  )
}
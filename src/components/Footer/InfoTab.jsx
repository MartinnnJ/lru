import LruLink from '../LruLink';
import styles from './InfoTab.module.scss';

import FishingIcon from '@/assets/fishing-icon.svg';

export default function InfoTab({ title }) {
  return (
    <div className={styles.tab}>
      <figure className={styles.tab__figure}>
        <img src={FishingIcon} alt="icon" />
      </figure>
      <h2 className={styles.tab__title}>{title}</h2>
      <LruLink
        to="/"
        size={1.5}
        weight={600}
      >
        Zobraziť všetky
      </LruLink>
    </div>
  );
}
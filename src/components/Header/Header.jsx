import Menu from './Menu';
import LruLink from '../LruLink';
import UserProfileCard from '../UserProfileCard';
import Button from '../Button';
import avatarImage from '@/assets/avatars/avatar-01.svg';
import lruLogo from '@/assets/lru-logo.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header__navigation']}>
        <figure className={styles['header__figure']}>
          <img src={lruLogo} alt="lru-logo" />
        </figure>
        <div className={styles['header__navigation-items']}>

          <LruLink
            to="/"
          >
            Disciplíny
          </LruLink>

          <LruLink
            to="/"
            type="default"
          >
            Zoznam pretekov
          </LruLink>

          <div className="flx-group">
            <UserProfileCard
              avatar={avatarImage}
              border={true}
              fontData={{ size: 1.5, color: '#1F2937', weight: 600 }}
            >
              Môj účet
            </UserProfileCard>

            <Button>
              Pridať nový pretek
            </Button>
          </div>

        </div>

        <div className={styles['header__menu-container']}>
          <Menu />
        </div>

      </div>
    </header>
  );
}
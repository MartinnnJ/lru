import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul className={styles['menu__list']}>
        <li className={styles['menu__line']}></li>
        <li className={styles['menu__line']}></li>
        <li className={styles['menu__line']}></li>
      </ul>
    </div>
  );
}
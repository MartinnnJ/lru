import styles from './CategoryBannerList.module.scss';

export default function CategoryBannerList({ children }) {
  return (
    <div className={styles.list}>
      {children}
    </div>
  );
}
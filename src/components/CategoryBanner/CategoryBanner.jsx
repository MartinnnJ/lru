import ArrowIcon from '@/assets/category-banner/arrow.svg';
import styles from './CategoryBanner.module.scss';
import useGradient from '@/hooks/use-gradient';

export default function CategoryBanner({ title, bgImage, url }) {
  const gradientValue = useGradient();

  const bgStyles = {
    backgroundImage: `${gradientValue}, url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <a
      href={url}
      className={styles.category}
      style={bgStyles}
      onClick={e => e.preventDefault()}
    >
      <h2 className={styles.category__title}>{title}</h2>
      <small className={styles.category__link}>
        <span>Zobraziť viac</span>
        <img src={ArrowIcon} alt="arrow-icon" />
      </small>
    </a>
  );
}
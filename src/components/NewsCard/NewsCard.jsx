import BadgeContainer from './BadgeContainer';
import Badge from '../Badge';
import UserProfileCard from '../UserProfileCard';
import LruLink from '../LruLink';
import styles from './NewsCard.module.scss';

export default function NewsCard({ image, title, badgeData, charLimit, articlePreviewText, authorData }) {
  const articlePreviewTextOutput = `${articlePreviewText.slice(0, (charLimit + 1))}...`;
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={styles['news-card']}>
      <figure className={styles['news-card__figure']} style={bgStyle}>
        {/* <img className={styles['news-card__image']} src={image} alt="article-image" /> */}
      </figure>
      <div className={styles['news-card__content']}>
        <h2 className={styles['news-card__title']}>
          {title}
        </h2>
        <BadgeContainer>
          {badgeData.map((obj, i) => <Badge key={i} data={obj} />)}
        </BadgeContainer>
        <article className={styles['news-card__article']}>
          {articlePreviewTextOutput}
        </article>
        <div className={styles['news-card__footer']}>
          <UserProfileCard
            avatar={authorData.avatar}
            fontData={{ size: 1.6, color: '#6B7280', weight: 500, }}
          >
            {authorData.authorName}
          </UserProfileCard>
          <LruLink
            to="/"
            size={1.5}
            weight={600}
          >
            Čítať ďalej
          </LruLink>
        </div>
      </div>
    </div>
  );
}
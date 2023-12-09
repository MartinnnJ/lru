import styles from './UserProfileCard.module.scss';

export default function UserProfileCard({ children, avatar, border = false, fontData }) {
  const fontStyles = {
    fontSize: `${fontData?.size || 1.5}rem`,
    fontWeight: fontData?.weight || 500,
    color: fontData?.color || '#1F2937',
  };
  const classes = `${styles['user-profile-card']} ${border ? styles.rounded : undefined}`;

  return (
    <div className={classes}>
      <img
        className={styles['user-profile-card__avatar']}
        src={avatar}
        alt="avatar"
      />
      <p
        className={styles['user-profile-card__text']}
        style={fontStyles}
      >
        {children}
      </p>
    </div>
  );
}
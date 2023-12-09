import styles from './Badge.module.scss';

export default function Badge({ className, data }) {
  const text = data.badgeText.toUpperCase();
  const classes = `${styles.badge} ${className}`;
  const bgColor = { backgroundColor: data.badgeBgColor };
  const fontColor = { color: data.badgeTextColor };

  return (
    <div className={classes} style={bgColor}>
      <small className={styles.badge__text} style={fontColor}>
        {text}
      </small>
    </div>
  );
}
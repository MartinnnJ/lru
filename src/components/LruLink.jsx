import styles from './LruLink.module.scss';

export default function LruLink({ children, to, type = 'base', size = 1.4, weight = 500 }) {
  const classes = `
    ${styles.link}
    ${type === 'default' ? styles['link--default'] : styles['link--base']}
  `;
  const linkCustomSize = {
    fontSize: `${size}rem`,
    fontWeight: weight,
  };

  return (
    <a
      className={classes}
      style={linkCustomSize}
      href={to}
      onClick={e => e.preventDefault()}
    >
      {children}
    </a>
  );
}
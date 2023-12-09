import styles from './Button.module.scss';

export default function Button({ children, type }) {
  const classes = `
    ${styles.button}
    ${type ? styles[type] : styles['button--base']}
  `;

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
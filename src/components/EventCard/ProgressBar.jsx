import styles from './ProgressBar.module.scss';

function calcPercentage(maxValue, num) { // how many % is 'num' of 'maxValue' ?
  if (num >= maxValue) {
    return 100;
  }
  return ((num * 100) / maxValue); // %
}

export default function ProgressBar({ data, disabled }) {
  const maxCapacity = data.maxCapacity;
  const registered = data.registered;
  const freePlaces = maxCapacity - registered;
  const per = calcPercentage(maxCapacity, registered);

  const registeredContent = !disabled ? (
    <div className={styles['progress-bar__registered']}>
      <small>
        Prihlásení
        <span>{registered}</span>
      </small>
    </div>
  ) : (
    <div className={styles['progress-bar__registered']}>
      <small>
        Súťažiacich
        <span>{registered}/{maxCapacity}</span>
      </small>
    </div>
  );

  const eventStatusText = disabled ? 'Ukončené preteky' : 'Voľné miesta:';
  const isTextCentered = disabled ? 'txt-c' : undefined;

  const progressLineStyle = {
    width: `${disabled ? 100 : per}%`,
    backgroundColor: `${disabled ? '#D1D5DB' : '#3B82F6'}`,
  };

  return (
    <div className={styles['progress-bar']}>

      {registeredContent}

      <div className={styles['progress-bar__bar']}>
        <div
          className={`${styles['progress-bar__line']} ${styles['progress-bar__line--progress']}`}
          style={progressLineStyle}
        ></div>
        <div className={`${styles['progress-bar__line']} ${styles['progress-bar__line--track']}`}></div>
      </div>

      <div className={`${styles['progress-bar__free']} ${isTextCentered}`}>
        <small>
          {eventStatusText}
          {!disabled && <span>{freePlaces}</span>}
        </small>
      </div>

    </div>
  );
}
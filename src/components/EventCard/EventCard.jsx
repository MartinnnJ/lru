import Badge from '../Badge';
import ProgressBar from './ProgressBar';
import Button from '../Button';
import styles from './EventCard.module.scss';

export default function EventCard({ image, badgeData, title, location, startDate, endDate, progressBarData, isFinished }) {
  const buttonType = isFinished ? 'button--light' : undefined;
  const buttonText = isFinished ? 'Výsledky' : 'Detail preteku';

  return (
    <div className={styles['event-card']}>
      <figure className={styles['event-card__figure']}>
        <img className={styles['event-card__image']} src={image} alt="event-image" />
        <Badge data={badgeData} className="abs-lb" />
      </figure>
      <div className={styles['event-card__content']}>
        <h2 className={styles['event-card__title']}>{title}</h2>
        <p className={styles['event-card__location']}>{location}</p>
        <p className={styles['event-card__range']}>{startDate} - {endDate}</p>
        <ProgressBar data={progressBarData} disabled={isFinished} />
        <Button type={buttonType}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
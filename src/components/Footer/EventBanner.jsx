import Badge from '../Badge';
import Button from '../Button';
import styles from './EventBanner.module.scss';

import geoIcon from '@/assets/event-banner/geo.svg';
import calendarIcon from '@/assets/event-banner/calendar.svg';

export default function EventBanner({ bgImage, badgeData, title, location, startDate, endDate }) {
  const bgStyle = {
    backgroundImage: `
      linear-gradient(90deg, #EFF6FF 56.04%, rgba(255, 255, 255, 0.00) 100%),
      url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className={styles['event-banner']}
      style={bgStyle}
    >
      <Badge data={badgeData} />
      <h1 className={styles['event-banner__title']}>
        {title}
      </h1>
      <p className={styles['event-banner__location']}>
        <img className={styles['event-banner__icon']} src={geoIcon} alt="geo-icon" />
        {location}
      </p>
      <p className={styles['event-banner__range']}>
        <img className={styles['event-banner__icon']} src={calendarIcon} alt="calendar-icon" />
        {startDate} - {endDate}
      </p>
      <Button>Detail preteku</Button>
    </div>
  );
}
import UserProfileCard from '../UserProfileCard';
import styles from './Table.module.scss';

export default function Table({ data }) {
  const tableHeader = data.tableHeader.map((headerText, i) => {
    const classes = `
      ${styles['table__header-cell']}
      ${i === 1 ? styles['table__header-cell--wider'] : undefined}
    `;
    // each iteration is one table header text
    return (
      <th key={i} className={classes}>
        {headerText}
      </th>
    );
  });

  const tableBody = data.tableBody.map((row, i) => {
    const isEven = (i + 1) % 2 == 0;
    const classes = `
      ${styles['table__body-row']}
      ${isEven ? styles['table__body-row--even'] : undefined}
    `;
    // each iteration is one table row
    return (
      <tr key={i} className={classes}>
        <th className={styles['table__body-cell']}>
          <UserProfileCard
            avatar={row.photo}
            fontData={{ size: 1.4 }}
          >
            {row.name}
          </UserProfileCard>
        </th>
        <th className={styles['table__body-cell']}>
          {row.eventName}
        </th>
        <th className={styles['table__body-cell']}>
          {row.eventLocation}
        </th>
        <th className={styles['table__body-cell']}>
          {row.eventYear}
        </th>
      </tr>
    );
  })

  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr className={styles['table__header-row']}>
          {tableHeader}
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {tableBody}
      </tbody>
    </table>
  );
}
import Button from '../ui/Button';
import styles from './ConcertTable.module.css';

const statusLabels = {
  available: 'Билеты есть',
  soldout: 'Sold Out',
};

export default function ConcertTable({ concerts }) {
  if (concerts.length === 0) {
    return (
      <p className={styles.empty}>Концертов в выбранном городе не найдено.</p>
    );
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Город</th>
            <th>Площадка</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {concerts.map((concert) => (
            <tr key={concert.id}>
              <td data-label="Дата">{concert.dateDisplay}</td>
              <td data-label="Город">{concert.city}</td>
              <td data-label="Площадка">{concert.venue}</td>
              <td data-label="Статус">
                <span
                  className={`${styles.status} ${
                    concert.status === 'soldout' ? styles['status--soldout'] : ''
                  }`}
                >
                  {statusLabels[concert.status]}
                </span>
              </td>
              <td data-label="">
                {concert.status === 'available' ? (
                  <Button href={concert.ticketUrl} external size="sm">
                    Купить
                  </Button>
                ) : (
                  <span className={styles.na}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

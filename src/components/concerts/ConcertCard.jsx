import Button from '../ui/Button';
import styles from './ConcertCard.module.css';

const statusLabels = {
  available: 'Билеты в продаже',
  soldout: 'Sold Out',
};

export default function ConcertCard({ concert, compact = false }) {
  const isSoldOut = concert.status === 'soldout';

  return (
    <article className={`${styles.card} ${compact ? styles['card--compact'] : ''}`}>
      <div className={styles.card__date}>
        <span className={styles.card__day}>
          {concert.dateDisplay.split(' ')[0]}
        </span>
        <span className={styles.card__month}>
          {concert.dateDisplay.split(' ').slice(1).join(' ')}
        </span>
      </div>
      <div className={styles.card__info}>
        <h3 className={styles.card__city}>{concert.city}</h3>
        <p className={styles.card__venue}>{concert.venue}</p>
        <span
          className={`${styles.card__status} ${
            isSoldOut ? styles['card__status--soldout'] : ''
          }`}
        >
          {statusLabels[concert.status]}
        </span>
      </div>
      {!isSoldOut && (
        <Button
          href={concert.ticketUrl}
          external
          size="sm"
          className={styles.card__btn}
        >
          Билеты
        </Button>
      )}
    </article>
  );
}

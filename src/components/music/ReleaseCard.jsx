import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './ReleaseCard.module.css';

export default function ReleaseCard({ album }) {
  return (
    <article className={styles.card}>
      <Link to={`/music/${album.id}`} className={styles.card__coverLink}>
        <div className={styles.card__cover}>
          <img src={album.cover} alt={album.title} loading="lazy" />
          <div className={styles.card__overlay}>
            <span>Смотреть</span>
          </div>
        </div>
      </Link>
      <div className={styles.card__body}>
        <span className={styles.card__year}>{album.year}</span>
        <h3 className={styles.card__title}>{album.title}</h3>
        <Button to={`/music/${album.id}`} variant="ghost" size="sm">
          Подробнее
        </Button>
      </div>
    </article>
  );
}

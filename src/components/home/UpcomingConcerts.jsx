import { getUpcomingConcerts } from '../../data/concerts';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import ConcertCard from '../concerts/ConcertCard';
import styles from './UpcomingConcerts.module.css';

export default function UpcomingConcerts() {
  const upcoming = getUpcomingConcerts(4);

  return (
    <AnimatedSection className={`section ${styles.concerts}`} direction="right">
      <div className="container">
        <div className={styles.concerts__header}>
          <div>
            <h2 className="section__title">
              Ближайшие <span>концерты</span>
            </h2>
            <p className="section__subtitle">Приходи на живое шоу</p>
          </div>
          <Button to="/concerts" variant="outline" className={styles.concerts__all}>
            Все даты
          </Button>
        </div>

        <ul className={styles.concerts__list}>
          {upcoming.map((concert) => (
            <li key={concert.id}>
              <ConcertCard concert={concert} compact />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

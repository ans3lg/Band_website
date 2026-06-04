import { band } from '../../data/band';
import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div
        className={styles.hero__bg}
        style={{ backgroundImage: `url(${band.heroImage})` }}
      />
      <div className={styles.hero__overlay} />
      <div className={styles.hero__noise} aria-hidden="true" />

      <div className={`container ${styles.hero__content}`}>
        <p className={styles.hero__tagline}>{band.tagline}</p>
        <h1 className={styles.hero__title}>{band.name}</h1>
        <p className={styles.hero__slogan}>{band.slogan}</p>
        <div className={styles.hero__actions}>
          <Button to="/music" size="lg">
            Слушать
          </Button>
          <Button to="/concerts" variant="outline" size="lg">
            Концерты
          </Button>
        </div>
      </div>

      <div className={styles.hero__scroll} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.hero__scrollLine} />
      </div>
    </section>
  );
}

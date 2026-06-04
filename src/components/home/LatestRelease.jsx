import { latestRelease } from '../../data/albums';
import { band } from '../../data/band';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import styles from './LatestRelease.module.css';

export default function LatestRelease() {
  return (
    <AnimatedSection className={`section ${styles.release}`} direction="left">
      <div className="container">
        <h2 className="section__title">
          Последний <span>релиз</span>
        </h2>
        <p className="section__subtitle">Новый альбом уже в стриминге</p>

        <div className={styles.release__card}>
          <div className={styles.release__cover}>
            <img src={latestRelease.cover} alt={latestRelease.title} />
          </div>
          <div className={styles.release__info}>
            <span className={styles.release__year}>{latestRelease.year}</span>
            <h3 className={styles.release__title}>{latestRelease.title}</h3>
            <p className={styles.release__desc}>{latestRelease.description}</p>
            <div className={styles.release__links}>
              <Button href={band.streaming.spotify} external variant="primary" size="sm">
                Spotify
              </Button>
              <Button href={band.streaming.youtube} external variant="outline" size="sm">
                YouTube
              </Button>
              <Button href={band.streaming.apple} external variant="ghost" size="sm">
                Apple Music
              </Button>
            </div>
            <Button to={`/music/${latestRelease.id}`} variant="dark" size="md" className={styles.release__more}>
              Подробнее об альбоме
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getAlbumById } from '../data/albums';
import { band } from '../data/band';
import Button from '../components/ui/Button';
import styles from './ReleaseDetailPage.module.css';

export default function ReleaseDetailPage() {
  const { id } = useParams();
  const album = getAlbumById(id);
  const [activeTrack, setActiveTrack] = useState(album?.tracks[0]?.id ?? null);

  if (!album) {
    return <Navigate to="/music" replace />;
  }

  const currentTrack = album.tracks.find((t) => t.id === activeTrack);

  return (
    <article className={styles.detail}>
      <div className={styles.detail__hero}>
        <div
          className={styles.detail__bg}
          style={{ backgroundImage: `url(${album.cover})` }}
        />
        <div className={styles.detail__overlay} />
        <div className={`container ${styles.detail__header}`}>
          <Link to="/music" className={styles.back}>
            ← Все релизы
          </Link>
          <div className={styles.detail__intro}>
            <img src={album.cover} alt={album.title} className={styles.detail__cover} />
            <div>
              <span className={styles.detail__year}>{album.year}</span>
              <h1 className={styles.detail__title}>{album.title}</h1>
              <p className={styles.detail__desc}>{album.description}</p>
              <div className={styles.detail__streaming}>
                <Button href={band.streaming.spotify} external size="sm">
                  Spotify
                </Button>
                <Button href={band.streaming.youtube} external variant="outline" size="sm">
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Треклист</h2>
          <ul className={styles.tracklist}>
            {album.tracks.map((track, index) => (
              <li key={track.id}>
                <button
                  type="button"
                  className={`${styles.track} ${
                    activeTrack === track.id ? styles['track--active'] : ''
                  }`}
                  onClick={() => setActiveTrack(track.id)}
                >
                  <span className={styles.track__num}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.track__title}>{track.title}</span>
                  <span className={styles.track__duration}>{track.duration}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {currentTrack && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Текст — {currentTrack.title}
            </h2>
            <pre className={styles.lyrics}>{currentTrack.lyrics}</pre>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Слушать</h2>
          <div className={styles.player}>
            <iframe
              title={`${album.title} — YouTube`}
              src={`https://www.youtube.com/embed/${album.youtubeVideoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </article>
  );
}

import { albums } from '../data/albums';
import PageHero from '../components/common/PageHero';
import ReleaseCard from '../components/music/ReleaseCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import styles from './MusicPage.module.css';

const heroImage =
  'https://images.unsplash.com/photo-1619983081563-430f63602796?w=1920&q=80';

export default function MusicPage() {
  return (
    <>
      <PageHero
        title="Музыка"
        subtitle="Все релизы NEON RUSH — альбомы, треки и тексты"
        image={heroImage}
      />
      <AnimatedSection className={`section ${styles.page}`}>
        <div className="container">
          <div className={styles.grid}>
            {albums.map((album) => (
              <ReleaseCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

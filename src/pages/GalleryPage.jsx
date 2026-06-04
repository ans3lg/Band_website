import { useMemo, useState } from 'react';
import { galleryPhotos, galleryCategories } from '../data/gallery';
import PageHero from '../components/common/PageHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryModal from '../components/gallery/GalleryModal';
import AnimatedSection from '../components/ui/AnimatedSection';
import styles from './GalleryPage.module.css';

const heroImage =
  'https://images.unsplash.com/photo-1501381936068-0c0d975f0b51?w=1920&q=80';

export default function GalleryPage() {
  const [category, setCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filtered = useMemo(() => {
    if (category === 'all') return galleryPhotos;
    return galleryPhotos.filter((p) => p.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        title="Галерея"
        subtitle="Концерты, закулисье и репетиции"
        image={heroImage}
      />
      <AnimatedSection className={`section ${styles.page}`}>
        <div className="container">
          <nav className={styles.filters} aria-label="Категории галереи">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterBtn} ${
                  category === cat.id ? styles['filterBtn--active'] : ''
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </nav>
          <GalleryGrid
            photos={filtered}
            onPhotoClick={setSelectedPhoto}
          />
        </div>
      </AnimatedSection>
      <GalleryModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </>
  );
}

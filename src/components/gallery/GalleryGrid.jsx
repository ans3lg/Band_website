import styles from './GalleryGrid.module.css';

export default function GalleryGrid({ photos, onPhotoClick }) {
  return (
    <div className={styles.grid}>
      {photos.map((photo, index) => (
        <button
          key={photo.id}
          type="button"
          className={styles.grid__item}
          onClick={() => onPhotoClick(photo)}
          style={{ animationDelay: `${index * 50}ms` }}
          aria-label={`Открыть: ${photo.alt}`}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" />
          <div className={styles.grid__overlay}>
            <span>+</span>
          </div>
        </button>
      ))}
    </div>
  );
}

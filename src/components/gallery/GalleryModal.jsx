import { useEffect } from 'react';
import styles from './GalleryModal.module.css';

export default function GalleryModal({ photo, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className={styles.modal__close}
        onClick={onClose}
        aria-label="Закрыть"
      >
        ×
      </button>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.src.replace('w=800', 'w=1400')} alt={photo.alt} />
        <p className={styles.modal__caption}>{photo.alt}</p>
      </div>
    </div>
  );
}

import { band } from '../../data/band';
import styles from './Loader.module.css';

export default function Loader({ visible }) {
  return (
    <div
      className={`${styles.loader} ${!visible ? styles['loader--hidden'] : ''}`}
      aria-hidden={!visible}
    >
      <div className={styles.loader__content}>
        <div className={styles.loader__logo}>{band.name}</div>
        <div className={styles.loader__bar}>
          <div className={styles.loader__progress} />
        </div>
        <p className={styles.loader__text}>Загрузка...</p>
      </div>
    </div>
  );
}

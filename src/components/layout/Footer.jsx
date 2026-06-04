import { Link } from 'react-router-dom';
import { band } from '../../data/band';
import SocialLinks from '../common/SocialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__grid}>
          <div className={styles.footer__brand}>
            <Link to="/" className={styles.footer__logo}>
              {band.name}
            </Link>
            <p className={styles.footer__tagline}>{band.tagline}</p>
            <SocialLinks />
          </div>

          <div className={styles.footer__col}>
            <h3 className={styles.footer__title}>Навигация</h3>
            <ul className={styles.footer__links}>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/music">Музыка</Link></li>
              <li><Link to="/concerts">Концерты</Link></li>
              <li><Link to="/gallery">Галерея</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>

          <div className={styles.footer__col}>
            <h3 className={styles.footer__title}>Контакты</h3>
            <ul className={styles.footer__contacts}>
              <li>
                <a href={`mailto:${band.email}`}>{band.email}</a>
              </li>
              <li>
                <a href={`tel:${band.phone.replace(/\s/g, '')}`}>{band.phone}</a>
              </li>
              <li>{band.city}, Россия</li>
            </ul>
            <p className={styles.footer__booking}>
              Сотрудничество и букинг:{' '}
              <a href={`mailto:${band.email}`}>{band.email}</a>
            </p>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>© {year} {band.name}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

import { NavLink } from 'react-router-dom';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose, links, bandName }) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles['overlay--open'] : ''}`}
      aria-hidden={!isOpen}
    >
      <nav className={styles.menu} aria-label="Мобильное меню">
        <p className={styles.menu__brand}>{bandName}</p>
        <ul className={styles.menu__list}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `${styles.menu__link} ${isActive ? styles['menu__link--active'] : ''}`
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

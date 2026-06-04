import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { band } from '../../data/band';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

const navLinks = [
  { to: '/', label: 'Главная', end: true },
  { to: '/music', label: 'Музыка' },
  { to: '/concerts', label: 'Концерты' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__inner}`}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logo__accent}>NEON</span>
          <span>RUSH</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.nav__list}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${styles.nav__link} ${isActive ? styles['nav__link--active'] : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles['burger--open'] : ''}`}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={closeMenu} links={navLinks} bandName={band.name} />
    </header>
  );
}

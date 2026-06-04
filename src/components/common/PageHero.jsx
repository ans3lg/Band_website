import styles from './PageHero.module.css';

export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.hero__overlay} />
      <div className={`container ${styles.hero__content}`}>
        <h1 className={styles.hero__title}>{title}</h1>
        {subtitle && <p className={styles.hero__subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}

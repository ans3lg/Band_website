import styles from './ConcertFilter.module.css';

export default function ConcertFilter({ cities, selectedCity, onChange }) {
  return (
    <div className={styles.filter}>
      <label htmlFor="city-filter" className={styles.filter__label}>
        Город:
      </label>
      <select
        id="city-filter"
        className={styles.filter__select}
        value={selectedCity}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">Все города</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

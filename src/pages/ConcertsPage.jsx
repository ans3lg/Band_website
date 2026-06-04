import { useMemo, useState } from 'react';
import { concerts, concertCities } from '../data/concerts';
import PageHero from '../components/common/PageHero';
import ConcertFilter from '../components/concerts/ConcertFilter';
import ConcertTable from '../components/concerts/ConcertTable';
import AnimatedSection from '../components/ui/AnimatedSection';
import styles from './ConcertsPage.module.css';

const heroImage =
  'https://images.unsplash.com/photo-1459747512213-bd741b196869?w=1920&q=80';

export default function ConcertsPage() {
  const [selectedCity, setSelectedCity] = useState('all');

  const filtered = useMemo(() => {
    if (selectedCity === 'all') return concerts;
    return concerts.filter((c) => c.city === selectedCity);
  }, [selectedCity]);

  return (
    <>
      <PageHero
        title="Концерты"
        subtitle="Расписание тура NEON RUSH — приходи на живое шоу"
        image={heroImage}
      />
      <AnimatedSection className={`section ${styles.page}`}>
        <div className="container">
          <div className={styles.toolbar}>
            <p className={styles.count}>
              {filtered.length} {filtered.length === 1 ? 'дата' : 'дат'}
            </p>
            <ConcertFilter
              cities={concertCities}
              selectedCity={selectedCity}
              onChange={setSelectedCity}
            />
          </div>
          <ConcertTable concerts={filtered} />
        </div>
      </AnimatedSection>
    </>
  );
}

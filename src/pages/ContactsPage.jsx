import { band } from '../data/band';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/contacts/ContactForm';
import SocialLinks from '../components/common/SocialLinks';
import AnimatedSection from '../components/ui/AnimatedSection';
import styles from './ContactsPage.module.css';

const heroImage =
  'https://images.unsplash.com/photo-1598488035139-bdbb2231d1bb?w=1920&q=80';

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Контакты"
        subtitle="Букинг, сотрудничество и обратная связь"
        image={heroImage}
      />
      <AnimatedSection className={`section ${styles.page}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.info__title}>Связаться с нами</h2>
              <ul className={styles.info__list}>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${band.email}`}>{band.email}</a>
                </li>
                <li>
                  <span>Телефон</span>
                  <a href={`tel:${band.phone.replace(/\s/g, '')}`}>{band.phone}</a>
                </li>
                <li>
                  <span>Город</span>
                  <p>{band.city}, Россия</p>
                </li>
              </ul>
              <p className={styles.info__booking}>
                Для букинга и сотрудничества пишите на{' '}
                <a href={`mailto:${band.email}`}>{band.email}</a>
              </p>
              <SocialLinks />
            </div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

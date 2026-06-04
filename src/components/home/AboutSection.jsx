import { band } from '../../data/band';
import AnimatedSection from '../ui/AnimatedSection';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <AnimatedSection className={`section ${styles.about}`} id="about">
      <div className="container">
        <h2 className="section__title">
          О <span>группе</span>
        </h2>
        <p className="section__subtitle">
          {band.founded} · {band.city}
        </p>

        <div className={styles.about__grid}>
          <div className={styles.about__visual}>
            <img src={band.aboutImage} alt="NEON RUSH на сцене" loading="lazy" />
            <div className={styles.about__accent} aria-hidden="true" />
          </div>

          <div className={styles.about__text}>
            {band.story.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className={styles.members}>
          {band.members.map((member, index) => (
            <li
              key={member.id}
              className={styles.member}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={styles.member__photo}>
                <img src={member.photo} alt={member.name} loading="lazy" />
              </div>
              <h3 className={styles.member__name}>{member.name}</h3>
              <p className={styles.member__role}>{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

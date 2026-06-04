import AnimatedSection from '../ui/AnimatedSection';
import SocialLinks from '../common/SocialLinks';
import styles from './SocialSection.module.css';

export default function SocialSection() {
  return (
    <AnimatedSection className={`section ${styles.social}`}>
      <div className={`container ${styles.social__inner}`}>
        <h2 className="section__title">
          Мы в <span>соцсетях</span>
        </h2>
        <p className="section__subtitle">
          Следи за новостями, закулисьем и анонсами туров
        </p>
        <SocialLinks large />
      </div>
    </AnimatedSection>
  );
}

import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import LatestRelease from '../components/home/LatestRelease';
import UpcomingConcerts from '../components/home/UpcomingConcerts';
import SocialSection from '../components/home/SocialSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <LatestRelease />
      <UpcomingConcerts />
      <SocialSection />
    </>
  );
}

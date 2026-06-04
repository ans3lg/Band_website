import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import ReleaseDetailPage from './pages/ReleaseDetailPage';
import ConcertsPage from './pages/ConcertsPage';
import GalleryPage from './pages/GalleryPage';
import ContactsPage from './pages/ContactsPage';

const LOADER_DURATION = 1800;

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Loader visible={loading} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="music/:id" element={<ReleaseDetailPage />} />
          <Route path="concerts" element={<ConcertsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

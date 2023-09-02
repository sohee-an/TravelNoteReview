import TripGallery from './pages/TripGallery/TripGallery';
import { Routes, Route } from 'react-router-dom';
// import UserLayout from './components/layout/UserLayout/UserLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TripGallery />} />
    </Routes>
  );
}

export default App;

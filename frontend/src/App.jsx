import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Points from './pages/Points';
import Rules from './pages/Rules';
import Schedule from './pages/Schedule';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto my-auto">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/points" element={<Points />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

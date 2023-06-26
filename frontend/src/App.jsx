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
    <div className="grid h-screen grid-rows-[auto_1fr_auto] px-4 py-2">
      <Navbar />
      <main className="m-8 flex h-full items-center justify-center">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/points" element={<Points />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

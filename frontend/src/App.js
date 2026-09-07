import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header id='header'>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            {/* Other routes will be added here */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <header id='header'>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

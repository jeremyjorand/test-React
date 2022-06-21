import Navbar from './components/Navbar/index';
import Gallery from './components/Gallery';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/Gallery' element={<Gallery />} />;
      </Routes>
    </div>
  );
}

export default App;

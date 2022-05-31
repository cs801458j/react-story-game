import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Ending from './pages/Ending';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/ending" element={<Ending />} />
    </Routes>
  );
}

export default App;

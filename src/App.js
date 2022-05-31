import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GameStart from './pages/GameStart';
import Ending from './pages/Ending';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game-start" element={<GameStart />} />
      <Route path="/ending" element={<Home />} />
    </Routes>
  );
}

export default App;

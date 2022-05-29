import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GameStart from './pages/GameStart';

function App() {
  return (
    <Routes>
      <Route path="/game-start" element={<GameStart />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

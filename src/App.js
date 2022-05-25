import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GameStart from './pages/GameStart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameStart />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Ending from './pages/Ending';
import RouteChangeTracker from './RouterChangeTracker';

function App() {
  RouteChangeTracker();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/ending" element={<Ending />} />
    </Routes>
  );
}

export default App;

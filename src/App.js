
import GamesContainer from './components/containers/GamesContainer';
import Navigation from './components/header/Navigation';
import PlatformsContainer from './components/containers/PlatformsContainer';
import GenresContainer from './components/containers/GenresContainer';
import Errorcontainer from './components/containers/Errorcontainer';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/GamesContainer" element={<GamesContainer />} />
        <Route path="/PlatformsContainer" element={<PlatformsContainer />} />
        <Route path="/GenresContainer" element={<GenresContainer />} />
        <Route path="*" element={<Errorcontainer />} />
      </Routes>
    </div>
  );
}

export default App;

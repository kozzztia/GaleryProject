
import Navigation from './Components/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Galery from './Components/Galery/Galery';
import Todo from './Components/Todo/Todo';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Game" element={<About />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

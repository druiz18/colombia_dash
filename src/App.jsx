import { Routes, Route, Link } from 'react-router-dom';
import Presidentes from './components/Presidentes';
import AtracTuristicas from './components/AtracTuristicas';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/president">Presidentes</Link></li> {/* Link para navegar a Presidentes */}
          <li><Link to="/turismo">Turismo</Link></li> {/* Link para navegar a AtracTuristicas */}
        </ul>
      </nav>
      <Routes>
        <Route path="/president" element={<Presidentes />} /> {/* Ruta para Presidentes */}
        <Route path="/turismo" element={<AtracTuristicas />} /> {/* Ruta para AtracTuristicas */}
      </Routes>
    </>
  );
}

export default App;

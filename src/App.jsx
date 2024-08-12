import { Routes, Route, Link } from 'react-router-dom';
import Presidentes from './components/Presidentes';
import AtracTuristicas from './components/AtracTuristicas';
import Bienvenida from './components/Bienvenida';

function App() {
  return (
    <>
    <Bienvenida></Bienvenida>
      <nav>
        <ul>
          <li><Link to="/president">Presidentes</Link></li> {/* Link para navegar a Presidentes */}
          <li><Link to="/turismo">Turismo</Link></li> {/* Link para navegar a AtracTuristicas */}
        </ul>
      </nav>

      <Routes>
        
        <Route path="/president" element={<Presidentes />} /> 
        <Route path="/turismo" element={<AtracTuristicas />} /> 
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

// Routes S = Agrupa todas las rutas
// Route = Define cada ruta o cada enlace
import Inicio from "../Pages/Inicio";
import Nosotros from "../Pages/Nosotros";
const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
      </Routes>
    </div>
  );
}

export default Rutas;
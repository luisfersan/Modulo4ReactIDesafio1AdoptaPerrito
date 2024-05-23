// Ejemplo de importación componente Header nombrada.Incluye llaves.
import { Header } from "./components/Header/Header";

// Ejemplo de importación componente Footer por defecto. No incluye llaves.
import Footer from "./components/Footer/Footer";

// Importando los estilos desde APP.css
import "./App.css";

function App() {
  return (
    <>
      {/*EL título está siendo especificado desde App.jsx a través de un prop con el atributo title */}
      <Header title="Adopta un Perrito" />
      <Footer />
    </>
  );
}

export default App;

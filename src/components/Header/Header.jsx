// Creando el componente Header.jsx que muestra el título “Adopta un perrito”.

//Importar styles desde Header.css
import "./Header.css";

// Importar el logo
import logo from "../../assets/react.svg";

// Ejemplo de exportación nombrada y agregando atributo title

export const Header = ({ title }) => {
  return (
    <header
      className="header"
      style={{ color: "white" }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a href=" ">
          <img
            src={logo}
            alt="Imágen del Logo"
            height="100px"
          />
        </a>
        {/* Si no existiera title con: || se coloca un título por defecto */}
        <h1 className="title">{title || "Título por Defecto"}</h1>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </header>
  );
};

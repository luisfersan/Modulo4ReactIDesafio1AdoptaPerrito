// Creando el componente Header.jsx que muestra el título “Adopta un perrito”.

//Importar styles desde Header.css
import "./Header.css";

// Ejemplo de exportación nombrada y agregando atributo title

export const Header = ({ title }) => {
  return (
    <header className="header">
      {/* Si no existiera title con: || se coloca un título por defecto */}
      <h1 className="title">{title || "Título por Defecto"}</h1>
    </header>
  );
};


// Importando los estilos desde APP.css
import "./App.css";

// Ejemplo de importación componente Header nombrada.Incluye llaves.
import { Header } from "./components/Header/Header";

// Importando componente Mycar.jsx
import Mycard from "./components/Mycard/Mycard";

// Ejemplo de importación componente Footer.
import { Footer } from "./components/Footer/Footer";

//Importando componente Tags.jsx
import Tags from "./components/Tags/Tags";

function App() {
  const imagenes = [
    {
      imagen:
        "https://d2yoo3qu6vrk5d.cloudfront.net/images/20221126164300/cropped-9b52cd30-78de-4e51-b581-b7f5e1f99d04-11.webp",
      title: "Quiero tener un hogar",
      description: "Descripción 1",
      tags: [
        { text: "Fantasía", color: "primary" },
        { text: "Clásico", color: "secondary" },
      ],
    },
    {
      imagen: "https://img.miwuki.com/Wo8py2c7/200",
      title: "Me gustaría estar en familia",
      description: "Descripción 2",
      tags: [
        { text: "Fantasía", color: "primary" },
        { text: "Clásico", color: "secondary" },
      ],
    },
    {
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa5gGJ3vv80-h6lBth2wnJH7GVNh1477qjdJFqTh0E0GB7GW8rtDuI_-xNKn3aGclfQg&usqp=CAU",
      title: "Soy muy cariñoso",
      description: "Descripción 3",
      tags: [
        { text: "Fantasía", color: "primary" },
        { text: "Clásico", color: "secondary" },
      ],
    },
  ];
  return (
    <>
      {/*EL título está siendo especificado desde App.jsx a través de un prop con el atributo title */}
      <Header title=" Adopta un Perrito" />
      <div className="container md-3">
        <div className="row">
          {imagenes.map((imagen, index) => (
            <div
              className="col-md-4"
              key={index}
            >
              <Mycard {...imagen} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Importamos el componente Tags.jsx
import Tags from "../Tags/Tags";

function Mycard({ title, imagen, description,tags }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imagen}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Tags tag={tags}/>
      </div>
    </div>
  );
}
export default Mycard;

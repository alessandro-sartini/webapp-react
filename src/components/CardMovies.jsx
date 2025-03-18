import { Link } from "react-router-dom";
export default function CardMovies({ movie }) {
  return (
    <div className="col">
      <div className="card card-home my-2 ">
        <img className="img-fluid" src={movie.image} alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text d-flex flex-column">
            <span>{movie.director} </span>
            <span> {movie.genre}</span>
            <span>Anno di uscita: {movie.release_year}</span>
          </p>
          <div className="my-2">
            <Link className="" to={`movie/${movie.id}`}>
              Apri la pagina dedicata
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

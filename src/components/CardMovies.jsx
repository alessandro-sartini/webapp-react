import { Link } from "react-router-dom";
export default function CardMovies({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <div className="card-body">
              <h5 className="card-title">
                  {movie.title}
              </h5>
        <p className="card-text">
          <span>{movie.director} </span> 
          <span> {movie.genre}</span> 
          
        </p>
        <Link to={`movie/${id}`}>Apri la pagina dedicata</Link> 

      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import ReviewMovie from '../components/ReviewMovie';
import ReviewAddForm from "./../components/ReviewAddForm";

export default function ProductPage() {

  const { id } = useParams();
  const { movie, fetchDataMoviesID } = useGlobalContext();

  const [reloadTrigger, setReloadTrigger] = useState(false);

  useEffect(() => {
    fetchDataMoviesID(id);
  }, [id, reloadTrigger]); 

  function fetchReviews() {
    return movie.reviews?.map((rev) => {
      return <ReviewMovie key={rev.id} review={rev} />;
    });
  }

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>{movie.title}</h1>
        <h2 className="m-3">{movie.director}</h2>
        <img className="img-film" src={movie.image} alt={movie.title} />
      </div>

      <h2 className="my-4 text-primary">Recensioni Utenti:</h2>
      <div className="row row-cols-2 my-3">
        
       {(movie.reviews?.length === 0 ) && (
          <p className="text-muted">Non ci sono ancora recensioni per questo film.</p>
        )}
        {movie.reviews?.length > 0 && fetchReviews()}

      </div>

      <ReviewAddForm onReviewAdded={() => setReloadTrigger(prev => !prev)} />
    </div>
  );
}


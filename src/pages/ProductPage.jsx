import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import ReviewMovie from "./../components/ReviewMovie";

export default function ProductPage() {
  const { id } = useParams();
  const { movie, fetchDataMoviesID } = useGlobalContext();

  useEffect(() => {
    fetchDataMoviesID(id);
  }, [id]);

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
      <h2 className='my-4'>Recensioni Utenti</h2>
      <div className="row row-cols-2 my-3">{fetchReviews()}</div>
    </div>
  );
}

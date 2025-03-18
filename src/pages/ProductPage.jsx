import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import ReviewMovie from './../components/ReviewMovie';

export default function ProductPage() {
  const { id } = useParams();
  const { movie, fetchDataMoviesID } = useGlobalContext();

  useEffect(() => {
    fetchDataMoviesID(id);
  }, [id]);
    
    function fetchReviews() {
       return movie.reviews?.map(rev => {
            return <ReviewMovie key={rev.id} review={rev}/>
        })
    }

    return (
      
    <div >
      <h1>{movie.title}</h1>
            <h2>{movie.director}</h2>
            <img src={movie.image} alt={movie.title} />
            <h2>Recensioni Utenti</h2>

            {fetchReviews()}
    </div>
        
  );
}

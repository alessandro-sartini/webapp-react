import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductPage() {
  const { id } = useParams();
  const { movie, fetchDataMoviesID } = useGlobalContext();

  useEffect(() => {
    fetchDataMoviesID(id);
  }, [id]);

    return (
      
    <div>
      <h1>{movie.title}</h1>
            <h2>{movie.director}</h2>
        <img src={movie.image} alt={movie.title} />
    </div>
        
  );
}

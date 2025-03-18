import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
// import { fetchMovies } from './../api/apiService';
import CardMovies from "./../components/CardMovies";

export default function HomePage() {
  const { movies, fetchDataMovies } = useGlobalContext();

  // Usando useEffect, il log viene eseguito solo quando movies cambia
  useEffect(() => {
    fetchDataMovies();
    console.log("Movies nello stato:", movies);
  }, []);
  useEffect(() => {
    console.log("Movies nello stato:", movies);
  }, [movies]);

 function mapCard() {
  return movies.map((movie) => (
    <CardMovies key={movie.id} movie={movie} />
  ));
}

  return (
    <>
      <h1>Film disponibili</h1>
      <div className="row row-cols-3">
      
        {mapCard()}
        
       
      </div>
    </>
  );
}

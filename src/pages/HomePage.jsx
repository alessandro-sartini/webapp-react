import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import CardMovies from "./../components/CardMovies";

export default function HomePage() {
  const { movies, fetchDataMovies } = useGlobalContext();

  useEffect(() => {
    fetchDataMovies();
    // console.log("Movies nello stato:", movies);
  }, []);

  // useEffect(() => {
  //   // console.log("Movies nello stato:", movies);
  // }, [movies]);

  function mapCard() {
    return movies.map((movie) => <CardMovies key={movie.id} movie={movie} />);
  }

  return (
    <div className="container py-4">
      <h1>Film disponibili</h1>
      <div
        className="
        row
        row-cols-1
        row-cols-sm-2
        row-cols-md-3
        row-cols-lg-4
        g-4"
      >
        {mapCard()}
      </div>
    </div>
  );
}

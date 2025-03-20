import { createContext, useState, useContext, useEffect } from "react";
import apiService from "../api/apiService";
import { useParams } from "react-router-dom";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   apiService.fetchMovies()
  //     .then((data) => {
  //       setMovies(data);
  //     })
  //     .catch((err) => {
  //       console.error("Errore nel fetch dei film: ", err);
  //     });
  // }, []);

  async function fetchDataMovies() {
    const data = await apiService.fetchMovies(setIsLoading);
    //  console.log(isLoading)
    setMovies(data);
  }

  // const { id } = useParams();

  async function fetchDataMoviesID(id) {
    const data = await apiService.fetchMovieID(id, setIsLoading);
    setMovie(data);
  }

  const variables = {
    movies,
    movie,
    // fetchDataID,
    fetchDataMoviesID,
    fetchDataMovies,
    isLoading,
    setIsLoading,
  };
  return (
    <GlobalContext.Provider value={variables}>
      {children}
    </GlobalContext.Provider>
  );
}
const useGlobalContext = () => useContext(GlobalContext);
export { GlobalProvider, useGlobalContext };

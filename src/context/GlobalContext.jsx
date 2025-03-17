import { createContext, useState, useContext, useEffect } from "react";
import apiService from "../api/apiService";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiService.fetchMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error("Errore nel fetch dei film: ", err);
      });
  }, []);

  const variables = {
    movies,
    // movieID,
    // fetchDataID,
    // fetchDataMovies,
  };
  return (
    <GlobalContext.Provider value={variables}>
      {children}
    </GlobalContext.Provider>
  );
}
const useGlobalContext = () => useContext(GlobalContext);
export { GlobalProvider, useGlobalContext };

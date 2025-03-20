// import { useParams } from "react-router-dom";
// import { useGlobalContext  } from "../context/GlobalContext.jsx";

const server_url = import.meta.env.VITE_URL_API_FILMS;
// export function fetchMovies() {
//   return fetch(server_url)
//     .then(response => response.json())
//     .catch(err => {
//       console.error("Errore: " + err);
//     });
// }
async function fetchMovies(setIsLoading) {

  try {
    setIsLoading(true);
  
    const response = await fetch(server_url);
    return await response.json();
  } catch (err) {
    console.error("Errore: " + err);
  } finally {
    setIsLoading(false);
  }
}

// const { id } = useParams();
async function fetchMovieID(id, setIsLoading) {
  try {
        setIsLoading(true);

    const response = fetch(server_url + "/" + id);
    return (await response).json();
  } catch (err) {
    console.error(err);
  } finally {
        setIsLoading(false);

  }
}

const apiService = {
  fetchMovies,
  fetchMovieID,
};

export default apiService;

// export default function fetchMovies() {
//   fetch("http://localhost:3000/movies")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// import { useState } from "react";

// // }
//   const [movies, setMovies] = useState([]);

// function fetchMovies() {
//   return fetch("http://localhost:3000/movies")
//     .then(response => {

//       response.json();
//     })
//     .then(data => setMovies(data))
//     .catch(err => {
//       console.error("Errore: " + err);
//     });
// }
//  async function fetchMovies() {
//   try {
//     const response = await fetch("http://localhost:3000/movies");
//     return await response.json();
//   } catch (err) {
//     console.error("Errore: " + err);
//   }
// }
// function fetchMovieID() {
//   return fetch("http://localhost:3000/movies/2")
//     .then(response => {

//       return response.json();
//     })
//     .catch(err => {
//       console.error("Errore: " + err);
//     });
// }
// async function fetchMovieID() {
//   try {
//     const response = await fetch("http://localhost:3000/movies/2");
//     return await response.json();
//   } catch (err) {
//     console.error("Errore: " + err);
//   }
// }

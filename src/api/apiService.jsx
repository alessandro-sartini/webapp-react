
export function fetchMovies() {
  return fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .catch(err => {
      console.error("Errore: " + err);
    });
}

const apiService = {
  fetchMovies
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


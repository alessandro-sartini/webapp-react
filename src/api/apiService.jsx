import { useParams } from "react-router-dom";

const server_url= import.meta.env.VITE_URL_API_FILMS
// export function fetchMovies() {
//   return fetch(server_url)
//     .then(response => response.json())
//     .catch(err => {
//       console.error("Errore: " + err);
//     });
// }
 async function fetchMovies() {
  try {
    const response = await fetch(server_url);
    return await response.json();
  } catch (err) {
    console.error("Errore: " + err);
  }
}

// const { id } = useParams();
async function fetchMovieID(id) {
  
  try {
    const response= fetch(server_url+'/'+id)
    return (await response).json();
  } catch (err) {
    
    console.error(err);
  }
  

}


const apiService = {
  fetchMovies,
  fetchMovieID
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


import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useGlobalContext, GlobalProvider } from "./context/GlobalContext";
import { useEffect } from "react";
// import { fetchMovies, fetchMovieID } from './api/apiService';

function App() {
  //  async function fetchDataMovies() {
  //    const data = await fetchMovies()
  //    console.log(data)
  //  }
  //   fetchDataMovies();

  //   async function fetchDataID() {
  //     const data = await fetchMovieID();
  //     console.log(data);
  //   }
  //   fetchDataID();
  // Test di fetch dei dati
//  const { movies, movieID, fetchDataMovies, fetchDataID } = useGlobalContext();
  
  


  // const { movies } = useGlobalContext();
   
  // console.log(movies)


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movie/:id" Component={ProductPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

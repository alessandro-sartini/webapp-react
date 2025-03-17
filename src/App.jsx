import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/movie/:id" Component={ProductPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

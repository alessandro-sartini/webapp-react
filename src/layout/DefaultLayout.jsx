import { Outlet } from "react-router-dom";
import Header from "../components/headerComponents/Header";
import Loader from "./../components/headerComponents/Loader";
import { useGlobalContext } from "../context/GlobalContext";

export default function DefaultLayout() {
  const { isLoading } = useGlobalContext();
  return (
    <>
      <Header />
      <main className="container my-3">
        <Outlet />
      </main>
      {isLoading && <Loader />}
    </>
  );
}

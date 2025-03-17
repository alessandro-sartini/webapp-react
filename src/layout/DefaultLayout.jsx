import { Outlet } from "react-router-dom";
import Header from "../components/headerComponents/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container my-3">
        <Outlet />
      </main>
    </>
  );
}

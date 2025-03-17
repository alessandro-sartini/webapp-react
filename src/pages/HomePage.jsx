import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

export default function HomePage() {
  const { movies } = useGlobalContext();
  
  // Usando useEffect, il log viene eseguito solo quando movies cambia
  useEffect(() => {
    console.log("Movies nello stato:", movies);
  }, [movies]);
    return (
      <p>Ciao</p>
  )
}

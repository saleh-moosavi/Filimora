import { useEffect } from "react";
import Hero from "./Hero";
import ListOfSlides from "./ListOfSlides";

export default function Home() {
  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    document.documentElement.classList.remove("overflow-hidden");
  }, []);
  return (
    <>
      <Hero />
      <ListOfSlides />
    </>
  );
}

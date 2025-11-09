import { useEffect } from "react";
import Hero from "../components/home-page/Hero";
import ListOfSlides from "../components/home-page/ListOfSlides";

export default function HomePage() {
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

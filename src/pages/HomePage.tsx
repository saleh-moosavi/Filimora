import { useEffect } from "react";
import Hero from "../components/home-page/Hero";
import ListOfSlides from "../components/home-page/ListOfSlides";

export default function HomePage() {
  useEffect(() => {
    window.scrollY > 0 && window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.classList.remove("overflow-hidden");
  }, []);
  return (
    <>
      <Hero />
      <ListOfSlides />
    </>
  );
}

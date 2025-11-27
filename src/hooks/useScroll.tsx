import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollY > 0 && window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.classList.remove("overflow-hidden");
  }, [pathname]);

  return null;
}

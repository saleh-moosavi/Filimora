import { useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import data from "../../dataJson/genresSubNav.json";
import { useDispatch, useSelector } from "react-redux";
import { setWidth, setScroll } from "../../redux/stateSlice";

export default function Header() {
  //connect to redux store
  const { width, scroll } = useSelector<any, any>(
    (state) => state.stateManager
  );
  const dispatch = useDispatch();

  //handle scroll and resizing changes
  useEffect(() => {
    const handleWinSize = () => {
      dispatch(setWidth(window.innerWidth));
    };
    const handleWinScroll = () => {
      dispatch(setScroll(window.scrollY));
    };
    window.addEventListener("resize", handleWinSize);
    window.addEventListener("scroll", handleWinScroll);
    return () => {
      window.removeEventListener("resize", handleWinSize);
      window.removeEventListener("scroll", handleWinScroll);
    };
  }, []);

  if (width > 768) {
    return <DesktopNav headerData={data} scroll={scroll} />;
  } else {
    return <MobileNav headerData={data} />;
  }
}

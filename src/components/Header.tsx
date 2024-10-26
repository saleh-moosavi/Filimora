import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidth, setScroll } from "../redux/stateSlice";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [searchWidth, setSearchWidth] = useState("0");
  //connect to redux store
  const { width, scroll } = useSelector<any, any>(
    (state) => state.stateManager
  );
  const dispatch = useDispatch();

  //handle md:search bar width
  const handleSearchBarWidth = () => {
    setSearchWidth(searchWidth == "0" ? "100" : "0");
  };

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
    return (
      <DesktopNav
        scroll={scroll}
        searchWidth={searchWidth}
        handleSearchBarWidth={handleSearchBarWidth}
      />
    );
  } else {
    return <MobileNav />;
  }
}

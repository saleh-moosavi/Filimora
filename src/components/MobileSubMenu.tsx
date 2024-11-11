import { Link } from "react-router-dom";
import data from "../dataJson/genresSubNav.json";

type MobileSubMenuType = {
  isOpen: boolean;
  id: number;
};

export default function MobileSubMenu(props: MobileSubMenuType) {
  return (
    <ul
      className={`ps-5 grid grid-cols-2 hover:cursor-auto bg-mobile-menu py-2 ${
        props.isOpen ? "h-full" : "h-0 hidden"
      }`}
    >
      {data[props.id].list.map((item, index: number) => {
        return (
          <Link to="/category">
            <li
              className="w-fit cursor-pointer hover:text-teal-300"
              key={index}
            >
              {item}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

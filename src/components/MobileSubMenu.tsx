import data from "../dataJson/genresSubNav.json";

export default function MobileSubMenu(props: any) {
  return (
    <ul
      className={`ps-5 grid grid-cols-2 hover:cursor-auto bg-gray-100/10 py-2 ${
        props.isOpen ? "h-full" : "h-0 hidden"
      }`}
    >
      {data[props.id].list.map((item, index) => {
        return (
          <li className="w-fit hover:text-stone-300 cursor-pointer" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

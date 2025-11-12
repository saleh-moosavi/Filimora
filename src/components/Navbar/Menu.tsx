import { Link } from "react-router-dom";
import { IGenre } from "../../types/apiResponse";
import data from "../../dataJson/genresSubNav.json";

export default function Menu({
  handleMenuMouseOver,
}: {
  handleMenuMouseOver: (isShow: boolean) => void;
}) {
  return (
    <article
      onMouseLeave={() => handleMenuMouseOver(false)}
      className="bg-black md:mx-5 p-5 pt-0 md:pt-5 md:rounded-xl overflow-y-scroll overscroll-contain md:overflow-y-auto md:overscroll-auto max-h-[80vh] md:max-h-[70vh]"
    >
      <div
        className="sticky top-0 w-full pb-10 bg-black md:hidden"
        onClick={() => handleMenuMouseOver(false)}
      >
        <span className="block w-1/2 bg-white rounded-b-md h-2 mx-auto"></span>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 col-span-1 gap-2 font-bold">
        {data.map((item: IGenre) => {
          return (
            <Link to={`/category/${item.mal_id}`} key={item.mal_id + item.name}>
              <li key={item.mal_id}>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </article>
  );
}

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
      className="bg-black p-5 rounded-xl shadow-md shadow-white"
    >
      <ul className="grid grid-cols-5 col-span-1 gap-2 font-bold">
        {data.map((item: IGenre) => {
          return (
            <Link to={`/category/${item.mal_id}`} key={item.mal_id}>
              <li key={item.mal_id}>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </article>
  );
}

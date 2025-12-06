import { Link } from "react-router-dom";
import { IGenre } from "../../types/apiResponse";
import Genres from "../../dataJson/genresSubNav.json";

export default function Menu({
  handleMenuMouseOver,
}: {
  handleMenuMouseOver: (isShow: boolean) => void;
}) {
  return (
    <article
      onMouseLeave={() => handleMenuMouseOver(false)}
      className="bg-my-black-med md:mx-5 p-5 pt-0 md:pt-5 md:rounded-xl overflow-y-scroll overscroll-contain md:overflow-y-auto md:overscroll-auto max-h-[80vh] md:max-h-[70vh]"
    >
      <div
        className="sticky top-0 w-full pb-10 bg-my-black-med md:hidden"
        onClick={() => handleMenuMouseOver(false)}
      >
        <span className="block w-1/2 bg-my-white-max rounded-b-md h-2 mx-auto"></span>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 col-span-1 gap-2 font-bold">
        {Genres.map((genre: IGenre) => {
          return (
            <Link
              to={`/category/${genre.mal_id}`}
              key={genre.mal_id + genre.name}
            >
              <li key={genre.mal_id}>{genre.name}</li>
            </Link>
          );
        })}
      </ul>
    </article>
  );
}

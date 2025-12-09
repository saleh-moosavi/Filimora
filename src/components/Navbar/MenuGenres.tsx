import { Link } from "react-router-dom";
import { IGenre } from "../../types/apiResponse";
import Genres from "../../dataJson/genresSubNav.json";

export default function MenuGenres({ classes }: { classes: string }) {
  return (
    <ul className={classes}>
      {Genres.map((genre: IGenre) => {
        return (
          <Link
            to={`/category/${genre.mal_id}`}
            key={"Genre-Item-" + genre.mal_id + genre.name}
          >
            <li key={genre.mal_id}>{genre.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

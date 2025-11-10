import { useEffect } from "react";
import data from "../dataJson/movies.json";
import CategoryItem from "../components/category/CategoryItem";

export default function Category() {
  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 pt-10 md:pt-32 gap-5 xl:max-w-[85rem] xl:mx-auto">
      {data.map((anime) => {
        return (
          <div key={anime.mal_id}>
            <CategoryItem item={anime} />
          </div>
        );
      })}
    </div>
  );
}

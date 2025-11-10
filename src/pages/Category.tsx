import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Anime } from "../types/apiResponse";
import { getAllData } from "../libs/getAllData";
import CategoryItem from "../components/category/CategoryItem";

export default function Category() {
  const { id } = useParams();
  const [data, setData] = useState<Anime[]>([]);

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    getAllData("anime?genres=" + id).then((result) => {
      if (result?.data) {
        setData(result.data);
      }
    });
  }, [id]);

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

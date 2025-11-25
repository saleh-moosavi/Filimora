import { useEffect, useState } from "react";
import { Anime } from "../types/apiResponse";
import { getAllData } from "../libs/getAllData";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryItem from "../components/category/CategoryItem";

export default function Category() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<Anime[]>([]);

  const linkParam = searchParams.get("link") || null;

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
    if (linkParam !== null) {
      getAllData(linkParam).then((result) => {
        if (result?.data) {
          setData(result.data);
        }
      });
    } else {
      getAllData("anime?genres=" + id).then((result) => {
        if (result?.data) {
          setData(result.data);
        }
      });
    }
  }, [id]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

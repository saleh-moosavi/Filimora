import { useEffect } from "react";
import { Anime } from "../types/apiResponse";
import { getAllData } from "../libs/getAllData";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryItem from "../components/category/CategoryItem";

export default function Category() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const linkParam = searchParams.get("link") || null;

  const { data, isLoading } = useQuery({
    queryKey: ["category", id, linkParam],
    queryFn: async (): Promise<Anime[]> => {
      const endpoint = linkParam !== null ? linkParam : "anime?genres=" + id;
      const result = await getAllData(endpoint);
      return result.data || [];
    },
    enabled: !!id || !!linkParam,
  });

  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) return <p>Loadnig</p>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data?.map((anime) => {
        return (
          <div key={`category-item-${anime.mal_id}`}>
            <CategoryItem item={anime} />
          </div>
        );
      })}
    </div>
  );
}

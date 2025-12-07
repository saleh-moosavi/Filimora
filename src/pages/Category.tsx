import useCategoryData from "../hooks/useCategoryData";
import { useParams, useSearchParams } from "react-router-dom";
import CategoryItem from "../components/category/CategoryItem";
import CategorySkeleton from "../components/category/CategorySkeleton";

export default function Category() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const linkParam = searchParams.get("link") || null;

  const { data, isLoading } = useCategoryData({ id, linkParam });

  if (isLoading) return <CategorySkeleton />;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data?.map((anime) => {
        return (
          <div key={`category-item-${anime.mal_id + anime.title}`}>
            <CategoryItem item={anime} />
          </div>
        );
      })}
    </div>
  );
}

import { Anime } from "../../types/apiResponse";
import CategoryItem from "../category/CategoryItem";

export default function ProfileView({ data }: { data: Anime[] }) {
  if (data?.length > 0) {
    return (
      <section className="h-full w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.map((anime) => {
            return (
              <div key={`category-item-${anime.mal_id}`}>
                <CategoryItem item={anime} />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section className="h-full w-full my-auto flex justify-center items-center font-bold text-2xl">
        You Do'nt Have Any Liked Anime In Your List
      </section>
    );
  }
}

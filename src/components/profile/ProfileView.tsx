import { Anime } from "../../types/apiResponse";

export default function ProfileView({ data }: { data: Anime[] }) {
  if (data?.length > 0) {
    return (
      <section className="h-full w-full flex justify-center items-center">
        wait
      </section>
    );
  } else {
    return (
      <section className="h-full w-full flex justify-center items-center">
        You Do'nt Have Any Liked Anime In Your List
      </section>
    );
  }
}

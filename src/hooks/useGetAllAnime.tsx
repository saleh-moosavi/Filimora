import { Anime } from "../types/apiResponse";
import fakeData from "../dataJson/movies.json";
import { getAllData } from "../libs/getAllData";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllAnime({
  path,
  delay,
}: {
  path: string;
  delay: number;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["anime", path],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      const response = await getAllData(path);
      return response.data || (fakeData as unknown as Anime[]);
    },
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading };
}

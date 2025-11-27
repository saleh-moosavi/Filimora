import { Anime } from "../types/apiResponse";
import { getAllData } from "../libs/getAllData";
import { useQuery } from "@tanstack/react-query";

export default function useCategoryData({
  id,
  linkParam,
}: {
  id: string | undefined;
  linkParam: string | null;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["category", id, linkParam],
    queryFn: async (): Promise<Anime[]> => {
      const endpoint = linkParam !== null ? linkParam : "anime?genres=" + id;
      const result = await getAllData(endpoint);
      return result.data || [];
    },
    enabled: !!id || !!linkParam,
  });
  return { data, isLoading };
}

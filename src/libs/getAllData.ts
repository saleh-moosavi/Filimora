import { Anime, pagination } from "../types/apiResponse";

export type IPath =
  | "seasons/now" //Currently Airing This Season
  | "season/later" //Latest Anime
  | "seasons/upcoming" //Upcoming / Not Yet Aired (Future)
  | "top/anime?page=1" //Trends
  | "recommendations/anime" //Recent Anime Recommendations
  | "anime?filter[year]=2025&order_by=score&sort=desc&limit=20" //Best of 2025
  | string; //custom

export const getAllData = async (
  path: IPath
): Promise<{
  data: Anime[];
  pagination: pagination;
}> => {
  const res = await fetch(`https://api.jikan.moe/v4/${path}`);
  const jRes = await res.json();
  const { data, pagination } = jRes;
  return { data, pagination };
};

export const getSingleAnime = async (
  id: string | undefined
): Promise<{
  data: Anime;
} | null> => {
  if (!id) return null;
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await res.json();
  return data;
};

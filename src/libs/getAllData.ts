import { IPath } from "../types/PropTypes";
import { Anime, IReview, pagination } from "../types/apiResponse";

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

export const getSingleAnime = async (id: string): Promise<Anime> => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await res.json();
  return data.data;
};

export const getAnimeReviews = async (id: string): Promise<IReview[]> => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`);
  const data = await res.json();
  return data.data;
};

import { Anime } from "../types/apiResponse";

interface IData {
  user: {
    email: string;
    password: string;
  } | null;
  likedList: Anime[];
}

export default function useLocalStorage() {
  const getData = async () => {
    const local = localStorage.getItem("FAnime");
    const data: IData = await JSON.parse(local || "null");
    return data;
  };

  const setLogIn = async (email: string, password: string) => {
    const oldData = await getData();
    localStorage.setItem(
      "FAnime",
      JSON.stringify({ ...oldData, user: { email, password } })
    );
  };
  const setLogOut = async () => {
    const oldData = await getData();
    localStorage.setItem("FAnime", JSON.stringify({ ...oldData, user: null }));
  };
  const addLikedAnime = async (anime: Anime) => {
    const oldData = await getData();
    const newData = oldData?.likedList.push(anime);
    localStorage.setItem(
      "FAnime",
      JSON.stringify({ ...oldData, likedList: newData })
    );
  };
  const removeLikedAnime = async (id: number) => {
    const oldData = await getData();
    const newData = oldData?.likedList.filter((item) => item.mal_id !== id);
    localStorage.setItem(
      "FAnime",
      JSON.stringify({ ...oldData, likedList: newData })
    );
  };

  return { getData, setLogIn, setLogOut, addLikedAnime, removeLikedAnime };
}

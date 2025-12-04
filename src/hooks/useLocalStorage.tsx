import { Anime } from "../types/apiResponse";

interface IData {
  user: {
    email: string;
    password: string;
  } | null;
  likedList: Anime[];
}

export default function useLocalStorage() {
  const getData = async (): Promise<IData> => {
    try {
      const local = localStorage.getItem("FAnime");
      if (!local) {
        return { user: null, likedList: [] };
      }
      const data: IData = JSON.parse(local);
      return {
        user: data.user || null,
        likedList: data.likedList || [],
      };
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return { user: null, likedList: [] };
    }
  };

  const setLogIn = async (email: string, password: string) => {
    try {
      const oldData = await getData();
      localStorage.setItem(
        "FAnime",
        JSON.stringify({ ...oldData, user: { email, password } })
      );
    } catch (error) {
      console.error("Error setting login:", error);
    }
  };

  const setLogOut = async () => {
    try {
      const oldData = await getData();
      localStorage.setItem(
        "FAnime",
        JSON.stringify({ ...oldData, user: null })
      );
    } catch (error) {
      console.error("Error setting logout:", error);
    }
  };

  const addLikedAnime = async (anime: Anime) => {
    try {
      const oldData = await getData();
      const currentLikedList = Array.isArray(oldData.likedList)
        ? oldData.likedList
        : [];

      if (!currentLikedList.some((item) => item.mal_id === anime.mal_id)) {
        const newData = {
          ...oldData,
          likedList: [...currentLikedList, anime],
        };
        localStorage.setItem("FAnime", JSON.stringify(newData));
      }
    } catch (error) {
      console.error("Error adding liked anime:", error);
    }
  };

  const removeLikedAnime = async (id: number) => {
    try {
      const oldData = await getData();
      const currentLikedList = Array.isArray(oldData.likedList)
        ? oldData.likedList
        : [];

      const newData = {
        ...oldData,
        likedList: currentLikedList.filter((item) => item.mal_id !== id),
      };
      localStorage.setItem("FAnime", JSON.stringify(newData));
    } catch (error) {
      console.error("Error removing liked anime:", error);
    }
  };

  return { getData, setLogIn, setLogOut, addLikedAnime, removeLikedAnime };
}

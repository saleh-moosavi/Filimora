import { Anime } from "../types/apiResponse";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ProfileView from "../components/profile/ProfileView";

export default function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState<Anime[]>([]);
  const [isDenied, setIsDenied] = useState(true);
  const { setLogOut, getData } = useLocalStorage();

  const getLocalStorageData = async () => {
    const savedData = await getData();
    if (savedData?.user == null) {
      navigate("/login-register");
      return;
    }
    setData(savedData.likedList);
    setIsDenied(false);
  };

  const handleLogOut = () => {
    setLogOut();
    navigate("/login-register");
  };

  useLayoutEffect(() => {
    getLocalStorageData();
  }, []);

  if (isDenied) return null;

  return (
    <section className="text-my-white-max w-full min-h-[80vh] flex flex-col">
      <ProfileView data={data} />
      <button
        className="px-8 py-2 bg-my-error font-semibold rounded-lg w-fit mt-auto mx-auto text-center"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </section>
  );
}

import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Profile() {
  const navigate = useNavigate();
  const [isDenied, setIsDenied] = useState(true);
  const { setLogOut, getData } = useLocalStorage();

  const getLocalStorageData = async () => {
    const savedData = await getData();
    if (savedData?.user == null) {
      navigate("/login-register");
      return;
    }
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
    <section className="text-my-white-max">
      <button onClick={handleLogOut}>Log Out</button>
    </section>
  );
}

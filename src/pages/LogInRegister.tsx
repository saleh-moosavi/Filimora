import { useNavigate } from "react-router-dom";
import AuthView from "../components/profile/AuthView";
import useLocalStorage from "../hooks/useLocalStorage";
import { FormEvent, useLayoutEffect, useState } from "react";

export default function LogInRegister() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isDenied, setIsDenied] = useState(true);
  const { getData, setLogIn } = useLocalStorage();
  const [isRegister, setIsRegister] = useState(false);

  const getLocalStorageData = async () => {
    const savedData = await getData();
    if (savedData?.user !== null) {
      navigate("/profile");
      return;
    }
    setIsDenied(false);
  };

  useLayoutEffect(() => {
    getLocalStorageData();
  }, []);

  //handle login
  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email.trim() == "mock@email.com" && password.trim() == "12345678") {
      setLogIn(email, password);
      navigate("/profile");
    } else {
      setIsError(true);
    }
  };

  //handle register
  const registerHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (
      email.trim() == "mock@email.com" &&
      password.trim() == "12345678" &&
      username.trim() == "mock"
    ) {
      setIsRegister(false);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  if (isDenied) return null;

  return (
    <AuthView
      isError={isError}
      isRegister={isRegister}
      loginHandler={loginHandler}
      setIsRegister={setIsRegister}
      registerHandler={registerHandler}
    />
  );
}

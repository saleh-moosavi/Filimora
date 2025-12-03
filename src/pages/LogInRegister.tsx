import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthView from "../components/profile/AuthView";

export default function LogInRegister() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  //handle login
  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email.trim() == "mock@email.com" && password.trim() == "12345678") {
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

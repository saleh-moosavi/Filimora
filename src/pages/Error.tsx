import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Error() {
  return (
    <div className="bg-my-black-max min-w-screen min-h-screen">
      <Navbar />
      <main className="min-h-[80vh] xl:max-w-[85rem] xl:mx-auto flex flex-col gap-5 items-center justify-center">
        <h1 className="text-4xl font-bold text-my-error">
          Oops! Something went wrong
        </h1>
        <p className="text-my-white-max">
          Please try again later or go back to the homepage.
        </p>
        <Link
          to="/"
          className="bg-my-white-max px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Back To Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

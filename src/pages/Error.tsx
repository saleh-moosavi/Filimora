import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen text-center bg-black">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong
      </h1>
      <p className="text-gray-300">
        Please try again later or go back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-white px-4 py-2 rounded-lg text-sm font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}

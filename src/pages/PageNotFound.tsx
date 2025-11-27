import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-[80vh] w-full flex flex-col gap-5 justify-center items-center">
      <img className="object-cover h-1/2 rounded-xl" src="/404.png" alt="" />
      <p className="text-white text-lg md:text-3xl font-bold">Page Not Found</p>
      <p className="text-white text-center">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <button
        className="bg-white px-4 py-2 rounded-lg text-sm font-semibold"
        onClick={() => navigate(-1)}
      >
        Back To Previous
      </button>
    </div>
  );
}

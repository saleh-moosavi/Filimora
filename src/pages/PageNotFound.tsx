import { useEffect } from "react";

export default function PageNotFound() {
  useEffect(() => {
    window.scrollY > 1 && window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img
        className="object-cover"
        src="https://imgix.ranker.com/list_img_v2/13396/2693396/original/best-deadpool-insults"
        alt=""
      />
      <p className="text-white text-2xl">PageNotFound</p>
    </div>
  );
}

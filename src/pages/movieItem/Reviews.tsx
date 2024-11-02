import { BiDislike, BiLike } from "react-icons/bi";
import data from "../../dataJson/reviews.json";

export default function Reviews() {
  return (
    <div className="px-7 md:px-12 pt-5 xl:max-w-[85rem] xl:mx-auto">
      {/* Title */}
      <div className="flex justify-between bg-one p-5 rounded-lg">
        <h3 className="color-white md:text-lg font-semibold">Comments</h3>
        <h3 className="color-white md:text-lg font-semibold">Add +</h3>
      </div>
      {/* Comment section */}
      {data.map((item, index) => {
        return (
          <article key={index} className="mt-5">
            <div className="bg-three p-5 rounded-lg">
              <section className="flex gap-x-5 items-center justify-between">
                <div className="flex gap-x-5 items-center">
                  <img className="w-14" src={item.avatar} />
                  <div>
                    <p className="color-white font-semibold">{item.name}</p>
                    <p className="color-white font-semibold">{item.time}</p>
                  </div>
                </div>
                <p className="color-white bg-two px-2 rounded-md hidden md:block">
                  {item.replays}
                </p>
              </section>
              <section className="mt-5">
                <p className="color-white text-justify text-sm font-semibold md:text-base md:font-normal">{item.comment}</p>
              </section>
              <section className="flex justify-between items-center mt-5">
                <p className="px-5 py-2 bg-two rounded-full color-white text-sm">
                  Replay
                </p>
                <div>
                  <button className="bg-two py-2 px-5 rounded-l-full color-white text-lg relative">
                    <BiLike />
                    <p className="absolute text-xs font-semibold -top-3 right-2 px-1 rounded-full bg-sky-600">
                      {item.likes}
                    </p>
                  </button>
                  <button className="bg-two py-2 px-5 rounded-r-full color-white text-lg relative">
                    <BiDislike />
                    <p className="absolute text-xs font-semibold -top-3 right-2 px-1 rounded-full bg-rose-600">
                      {item.disLikes}
                    </p>
                  </button>
                </div>
              </section>
            </div>
          </article>
        );
      })}
    </div>
  );
}

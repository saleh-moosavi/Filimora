import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { IReview } from "../../types/apiResponse";

export default function Reviews({ data }: { data: IReview[] }) {
  const [reviewCount, setReviewCount] = useState<number>(10);

  const handleShowMoreReview = () => {
    if (data.length < reviewCount) return;
    setReviewCount((prev) => prev + 10);
  };
  const handleShowLessReview = () => {
    if (reviewCount <= 10) return;
    setReviewCount((prev) => prev - 10);
  };

  return (
    <div>
      {/* Title */}
      <div className="flex justify-between bg-one p-5 rounded-lg">
        <h3 className="color-white md:text-lg font-semibold">Comments</h3>
        <h3 className="color-white md:text-lg font-semibold cursor-pointer">
          Add +
        </h3>
      </div>
      {/* Comment section */}
      {data.slice(0, reviewCount).map((review) => {
        return (
          <article key={review.mal_id} className="mt-5">
            <div className="bg-three p-5 rounded-lg">
              <section className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
                <div className="flex gap-x-5 items-center">
                  <img
                    className="w-14 aspect-square object-cover rounded-lg"
                    src={review.user.images.webp.image_url}
                  />
                  <div>
                    <p className="color-white font-semibold">
                      {review.user.username}
                    </p>
                    <p className="color-white font-semibold">
                      {review.date.split("T")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center *:font-bold *:text-center text-white *:px-4 *:py-2 text-xs">
                  <button className="flex items-center justify-center gap-2 bg-gray-800 rounded-s-lg">
                    <BiLike className="size-4" />
                    <p>{review.reactions.nice}</p>
                  </button>
                  <p className="bg-gray-600 rounded-e-lg">{review.score} / 10</p>
                </div>
              </section>
              <section className="mt-5">
                <p className="color-white text-justify text-sm font-semibold md:text-base md:font-normal">
                  {review.review.substring(0, 500)}
                </p>
              </section>
            </div>
          </article>
        );
      })}
      {data.length > reviewCount ? (
        <div className="w-full flex justify-center">
          <button
            className="my-2 text-white bg-blue-500 px-8 py-2 rounded-lg"
            onClick={handleShowMoreReview}
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <button
            className="my-2 text-white bg-orange-500 px-8 py-2 rounded-lg"
            onClick={handleShowLessReview}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

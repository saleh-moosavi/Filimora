import { useState } from "react";
import { BiLike } from "react-icons/bi";
import ReviewButton from "./ReviewButton";
import { IReview } from "../../types/apiResponse";

export default function Reviews({ data }: { data: IReview[] }) {
  const [reviewCount, setReviewCount] = useState<number>(5);

  const handleShowMoreReview = () => {
    if (data.length < reviewCount) return;
    setReviewCount((prev) => prev + 5);
  };
  const handleShowLessReview = () => {
    if (reviewCount <= 5) return;
    setReviewCount(5);
  };

  return (
    <div>
      {/* Title */}
      <div className="flex justify-between bg-my-black-med p-5 rounded-lg">
        <h3 className="text-my-white-max md:text-lg font-semibold">Comments</h3>
        <h3 className="text-my-white-max md:text-lg font-semibold cursor-pointer">
          Add +
        </h3>
      </div>
      {/* Comment section */}
      {data.slice(0, reviewCount).map((review) => {
        return (
          <article key={`review-item-${review.mal_id}`} className="mt-5">
            <div className="bg-my-black-med p-5 rounded-lg">
              <section className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
                <div className="flex gap-x-5 items-center">
                  <img
                    className="w-14 aspect-square object-cover rounded-lg bg-my-white-min"
                    src={review.user.images.webp.image_url}
                  />
                  <div>
                    <p className="text-my-white-max font-semibold">
                      {review.user.username}
                    </p>
                    <p className="text-my-white-max font-semibold">
                      {review.date.split("T")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center *:font-bold *:text-center text-my-white-max *:px-4 *:py-2 text-xs">
                  <button className="flex items-center justify-center gap-2 bg-my-green-max rounded-s-lg">
                    <BiLike className="size-4" />
                    <p>{review.reactions.nice}</p>
                  </button>
                  <p className="bg-my-green-med rounded-e-lg">
                    {review.score} / 10
                  </p>
                </div>
              </section>
              <section className="mt-5">
                <p className="text-my-white-max text-justify text-sm font-semibold md:text-base md:font-normal">
                  {review.review.substring(0, 500)}
                </p>
              </section>
            </div>
          </article>
        );
      })}
      {data.length > 0 ? (
        <ReviewButton
          dataLength={data.length}
          reviewCount={reviewCount}
          showLess={handleShowLessReview}
          showMore={handleShowMoreReview}
        />
      ) : (
        <p className="text-center text-white font-semibold mt-5">
          There Is No Comment Here , Be The First One Who Leaves a Comment For
          This Anime
        </p>
      )}
    </div>
  );
}

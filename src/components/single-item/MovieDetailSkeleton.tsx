export default function MovieDetailSkeleton() {
  return (
    <div className="grid md:grid-cols-2 min-h-[80vh] animate-pulse">
      {/* Image Skeleton */}
      <div className="flex justify-center md:justify-start">
        <div className="rounded-3xl w-72 min-h-96 bg-my-black-min"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-6">
        {/* Title */}
        <div className="space-y-3">
          <div className="h-8 bg-my-black-min rounded w-3/4 mx-auto mt-5 md:mx-0 md:mt-0"></div>
          <div className="h-6 bg-my-black-min rounded w-1/2 mx-auto mt-5 md:mx-0 md:mt-0"></div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={`Movie-Detail-Skeleton-Details-${index}`}
              className="h-6 max-w-52 bg-my-black-min rounded"
            ></div>
          ))}
        </div>

        {/* Synopsis (Mobile) */}
        <div className="md:hidden space-y-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={`Movie-Detail-Skeleton-Synopsis-Mobile-${index}`}
              className="h-4 bg-my-black-min rounded"
            ></div>
          ))}
        </div>
      </div>

      {/* Synopsis (Desktop) */}
      <div className="md:col-span-2 hidden md:block space-y-2 mt-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={`movie-detail-skeleton-synopsis-desktop-${index}`}
            className="h-4 bg-gray-300 rounded"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewButton({
  showMore,
  showLess,
  dataLength,
  reviewCount,
}: {
  dataLength: number;
  reviewCount: number;
  showMore: () => void;
  showLess: () => void;
}) {
  return (
    <>
      {dataLength > reviewCount ? (
        <div className="w-full flex justify-center">
          <button
            className="my-2 text-white bg-blue-500 px-8 py-2 rounded-lg"
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <button
            className="my-2 text-white bg-orange-500 px-8 py-2 rounded-lg"
            onClick={showLess}
          >
            Show Less
          </button>
        </div>
      )}
    </>
  );
}

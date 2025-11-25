export default function ReviewsSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Title */}
      <div className="flex justify-between bg-white/50 p-5 rounded-lg">
        <h3 className="bg-white h-5 w-20 rounded"></h3>
        <h3 className="bg-white h-5 w-20 rounded"></h3>
      </div>
      {/* Comment section */}
      {[...Array(5)].map((_, index) => {
        return (
          <article key={`review-skeleton-${index}`} className="mt-5">
            <div className="bg-white/50 p-5 rounded-lg">
              <section className="flex gap-x-5 items-center justify-between">
                <div className="flex gap-5 items-center">
                  <section className="w-14 aspect-square rounded-lg bg-white"></section>
                  <div className="w-20 space-y-2 *:rounded">
                    <p className="bg-white h-5"></p>
                    <p className="bg-white h-5"></p>
                  </div>
                </div>

                <div className="flex items-center *:font-bold text-white *:px-4 *:py-2 rounded overflow-hidden text-xs">
                  <p className="w-full bg-white h-5"></p>
                  <p className="w-full bg-white h-5"></p>
                </div>
              </section>
              <section className="mt-5 space-y-2">
                <p className="w-full bg-white h-5 rounded"></p>
                <p className="w-full bg-white h-5 rounded"></p>
                <p className="w-full bg-white h-5 rounded"></p>
              </section>
            </div>
          </article>
        );
      })}
    </div>
  );
}

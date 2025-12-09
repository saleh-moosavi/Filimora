export default function CategorySkeleton() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {[...Array(8)].map((_, index) => (
        <article key={"Category-Skeleton-item-" + index}>
          <div className="space-y-2 animate-pulse">
            <div className="rounded-xl w-full h-[30rem] md:h-80 lg:h-96 xl:h-[30rem] bg-my-black-min"></div>
            <div className="h-8 bg-my-black-min rounded-md w-full mx-auto mt-5 md:mx-0 md:mt-0"></div>
          </div>
        </article>
      ))}
    </section>
  );
}

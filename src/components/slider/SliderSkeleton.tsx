export default function SliderSkeleton() {
  return (
    <article>
      <section className="h-20 w-full bg-my-black-min animate-pulse rounded-lg"></section>
      <section className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 my-10">
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={`SliderSkeleton-${item}`}
            className={`
              w-full h-full min-h-52 flex flex-col gap-2
              ${item <= 1 && "invisible sm:visible"}
              ${item <= 2 && "invisible lg:visible"}
              ${item <= 4 && "invisible xl:visible"}
            `}
          >
            <article className="bg-my-black-min animate-pulse rounded-lg h-full"></article>
            <article className="bg-my-black-min animate-pulse rounded-md h-8"></article>
          </div>
        ))}
      </section>
    </article>
  );
}

export default function SliderSkeleton() {
  return (
    <article>
      <section className="h-20 w-full bg-gray-200 animate-pulse rounded-lg"></section>
      <section className="w-full h-96 grid grid-cols-5 *:col-span-1 gap-5 my-10">
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={`SliderSkeleton-${item}`}
            className="w-full h-full flex flex-col gap-2"
          >
            <article className="bg-gray-200 animate-pulse rounded-lg h-full"></article>
            <article className="bg-gray-200 animate-pulse rounded-md h-8"></article>
          </div>
        ))}
      </section>
    </article>
  );
}

export default function Trailer({ src }: { src: string | null }) {
  if (src == null) return;
  const url = new URL(src);
  url.searchParams.set("autoplay", "0");

  return (
    <iframe
      src={url.toString()}
      title="Anime Trailer"
      className="w-full aspect-video max-h-[80vh] rounded-xl bg-my-black-min"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
}

export default function SlideItem(props: any) {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden group">
        <img className="rounded-lg" src={props.img} alt={props.title} />
        <p className="absolute top-0 left-0 text-white m-2 p-2 text-xs font-semibold bg-gray-700 border-[3px] border-yellow-500 rounded-full group-hover:scale-0 transition-all duration-300">
          {props.rate}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black flex justify-center items-end py-3 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white font-medium text-sm text-justify line-clamp-4">{props.desc}</p>
        </div>
      </div>
      <h3 className="text-white font-semibold text-center py-5">
        {props.title}
      </h3>
    </div>
  );
}

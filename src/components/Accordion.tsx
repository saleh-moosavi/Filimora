import { FaAngleDown } from "react-icons/fa";

export default function Accordion(props: {
  accordion: any;
  showAccordion: any;
  id: number;
  season: number;
}) {
  return (
    <div className="my-5">
      {/* accordin header */}
      <div
        onClick={() => props.showAccordion(props.id)}
        className={`flex items-center cursor-pointer justify-between w-full p-5 font-medium rtl:text-right bg-one rounded-t-lg ${
          !props.accordion[props.id] && "rounded-lg"
        }`}
      >
        <span>Season {props.season}</span>
        <FaAngleDown />
      </div>
      {/* accordin Content */}
      <div
        className={`p-5 bg-three rounded-b-lg ${
          !props.accordion[props.id] && "hidden"
        }`}
      >
        <div className="flex items-center justify-between w-full p-5 bg-two rounded-full my-5">
          <p className="text-xs font-semibold md:text-base download-gradient-one px-2 md:px-5 py-2 rounded-full cursor-pointer hover:shadow-[0_0_10px_#fff] transition-all duration-300">
            Download
          </p>
          <p className="text-xs font-semibold md:text-base download-gradient-two px-2 md:px-5 py-2 rounded-full select-none">
            Web-DL
          </p>
        </div>

        <div className="flex items-center justify-between w-full p-5 bg-two rounded-full my-5">
          <p className="text-xs font-semibold md:text-base px-2 md:px-5 download-gradient-one py-2 rounded-full cursor-pointer hover:shadow-[0_0_10px_#fff] transition-all duration-300">
            Download
          </p>
          <p className="text-xs font-semibold md:text-base px-2 md:px-5 download-gradient-two py-2 rounded-full select-none">
            1080 - Soft Sub
          </p>
        </div>
      </div>
    </div>
  );
}

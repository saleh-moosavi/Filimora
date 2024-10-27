import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function MovieDownloadLink() {
  const [accordion, setAccordion] = useState(Array(5).fill(false));

  const showAccordion = (id: any) => {
    const allAccordions = [...accordion];
    const current = allAccordions[id];
    allAccordions.fill(false);
    allAccordions[id] = current ? false : true;
    setAccordion(allAccordions);
  };
  return (
    <div className="px-12 text-white mt-10 xl:max-w-[85rem] xl:mx-auto">
      <h3 className="text-lg font-semibold">Download Links</h3>
      {/* an accordion */}
      <div className="my-5">
        {/* accordin header */}
        <div
          onClick={() => showAccordion(0)}
          className={`flex items-center cursor-pointer justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 rounded-t-lg ${
            !accordion[0] && "rounded-lg"
          }`}
        >
          <span>Season 1</span>
          <FaAngleDown />
        </div>
        {/* accordin Content */}
        <div
          className={`p-5 bg-gray-950 rounded-b-lg ${
            !accordion[0] && "hidden"
          }`}
        >
          <div className="flex items-center justify-between w-full p-5 bg-gray-900 rounded-full my-5">
            <p className="bg-gradient-to-r from-blue-700 to-70% px-5 py-2 rounded-full cursor-pointer hover:shadow-[0_0_10px_#fff] transition-all duration-300">
              Download
            </p>
            <p className="bg-gradient-to-l from-purple-700 to-70% px-5 py-2 rounded-full select-none">
              Web-DL
            </p>
          </div>

          <div className="flex items-center justify-between w-full p-5 bg-gray-900 rounded-full my-5">
            <p className="bg-gradient-to-r from-blue-700 to-70% px-5 py-2 rounded-full cursor-pointer hover:shadow-[0_0_10px_#fff] transition-all duration-300">
              Download
            </p>
            <p className="bg-gradient-to-l from-purple-700 to-70% px-5 py-2 rounded-full select-none">
              1080 - Soft Sub
            </p>
          </div>
        </div>
      </div>

      {/* another accordion */}
      <div className="my-5">
        {/* accordin header */}
        <div
          onClick={() => showAccordion(1)}
          className={`flex items-center cursor-pointer justify-between w-full p-5 font-medium rtl:text-right bg-gray-700 rounded-t-lg ${
            !accordion[1] && "rounded-lg"
          }`}
        >
          <span>Season 2</span>
          <FaAngleDown />
        </div>
        {/* accordin Content */}
        <div
          className={`p-5 bg-gray-950 rounded-b-lg ${
            !accordion[1] && "hidden"
          }`}
        >
          <div className="flex items-center justify-between w-full p-5 bg-gray-900 rounded-full my-5">
            <p className="bg-gradient-to-r from-blue-700 to-70% px-5 py-2 rounded-full cursor-pointer hover:shadow-[0_0_10px_#fff] transition-all duration-300">
              Download
            </p>
            <p className="bg-gradient-to-l from-purple-700 to-70% px-5 py-2 rounded-full select-none">
              Web-DL
            </p>
          </div>

          <div className="flex items-center justify-between w-full p-5 bg-gray-900 rounded-full my-5">
            <p className="bg-gradient-to-r from-blue-700 to-70% px-5 py-2 rounded-full cursor-pointer hover:shadow-[0_0_10px_#fff] transition-all duration-300">
              Download
            </p>
            <p className="bg-gradient-to-l from-purple-700 to-70% px-5 py-2 rounded-full select-none">
              1080 - Soft Sub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

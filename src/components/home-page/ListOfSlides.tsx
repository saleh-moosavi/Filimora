import Slider from "../Slider";
import { useEffect, useState } from "react";
import { Anime } from "../../types/apiResponse";
import { getAllData } from "../../libs/getAllData";

export default function ListOfSlides() {
  const [data, setData] = useState<Anime[] | null>(null);
  useEffect(() => {
    getAllData("seasons/now").then((data) => setData(data.data));
  }, []);

  return (
    <div className="md:px-20 px-5">
      <Slider title="Trends Movies" data={data} />
      <Slider title="Trends Series" data={data} />
      <Slider title="Best Of 2024" data={data} />
      <Slider title="Latest Animations" data={data} />
      <Slider title="Latest Anime" data={data} />
      <Slider title="Best Of Korea" data={data} />
      <Slider title="Latest Talk Show" data={data} />
    </div>
  );
}

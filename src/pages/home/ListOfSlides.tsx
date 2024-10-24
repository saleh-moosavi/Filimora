import Slider from '../../components/Slider'
import data from "../../dataJson/trends.json";

export default function ListOfSlides() {
  return (
    <div className='md:px-20'>
        <Slider sliderTitle="Trends Movies" data={data}/>
        <Slider sliderTitle="Trends Series" data={data}/>
        <Slider sliderTitle="Best Of 2024" data={data}/>
        <Slider sliderTitle="Latest Animations" data={data}/>
        <Slider sliderTitle="Latest Anime" data={data}/>
        <Slider sliderTitle="Best Of Korea" data={data}/>
        <Slider sliderTitle="Latest Talk Show" data={data}/>
    </div>
  )
}
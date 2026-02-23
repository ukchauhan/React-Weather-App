import SearchBox from "./SearchBox"
import DetailBox from './DetailBox'
import { useState } from "react"

export default function WeatherApp(){

    let [weather , setWeather] = useState({
        
            city : "Noida",
            feelslike : 22.34,
            temp : 23.05,
            tempMin : 22.05,
            tempMax : 24.05,
            humidity : 47,
            weather : "Clear sky"
        
    });

    let updateInfo = (newInfo)=>{
        setWeather(newInfo);
    }

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <DetailBox info={weather}/>
        </div>
    )
}
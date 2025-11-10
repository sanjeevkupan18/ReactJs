import { createContext,useContext ,useState} from "react";
import { GetWeatherReport ,GetWeatherReportByLatLon} from "../api";

const WeatherContext = createContext(null);

export const useWeather =()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider = (props)=>{
    const [data,setData] = useState(null)
    const [searchCity,setSearchCity]= useState(null)

    const fetchData = async()=>{
        const response = await GetWeatherReport(searchCity);
        setData(response)
    }

    const fetchCurrentLocation =()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            GetWeatherReportByLatLon(position.coords.latitude,position.coords.longitude)
            .then((data)=>setData(data))
        })
    }

    return (
      <WeatherContext.Provider
        value={{
          searchCity,
          data,
          setSearchCity,
          setData,
          fetchData,
          fetchCurrentLocation,
        }}
      >
        {props.children}
      </WeatherContext.Provider>
    );
}

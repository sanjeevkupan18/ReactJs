const baseUrl = import.meta.env.VITE_WEATHER_API_KEY_BASEURL;

export const GetWeatherReport = async(city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&api=yes`)
    return await response.json()
}

export const GetWeatherReportByLatLon = async (lat,lon) => {
  const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
const getWeatherURL = (
  latitude: number,
  longitude: number,
  secretKey: string
) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${secretKey}&units=imperial`;
};

export { getWeatherURL };

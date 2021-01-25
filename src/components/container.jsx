import React, { useState, useEffect } from "react";

function Container() {
  const [city, setcity] = useState(null);
  const [weathers, setweathers] = useState(false);
  const [search, setsearch] = useState("Faisalabad");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b84f47b108fd54f27461f6ec07f83c60`;
      const response = await fetch(url);
      console.log(response);
      const resjson = await response.json();
      console.log(resjson.main);
      console.log(resjson.weather);
      if (resjson.main) {
        setcity(resjson);
        setweathers(true);
      } else {
        setweathers(false);
      }
    };

    fetchapi();
  }, [search]);
  const onChangeSearch = (eve) => setsearch(eve.target.value);

  return (
    <>
      <div className="wraper">
        <h1 className="top">Today's Weather</h1>
        <div className="inp">
          <input type="search" onChange={onChangeSearch} value={search} />
        </div>
        {!weathers ? (
          <h2 className="nodata ther">No Data Found</h2>
        ) : (
          <>
            <div className="dis">
              <i className="fas fa-street-view stree" />
              <h2 className="city">{search}</h2>
            </div>
            <div className="showtem">
              <h2 className="tem">{city.main.temp}°C</h2>
              <br />
              <pre>
                <h3 className="tem">
                  Min {city.main.temp_min}°C   ||   Max {city.main.temp_max}°C
                </h3>
              </pre>
            </div>
          </>
        )}
      
      {!weathers ? (
        <h2 className="nodata ther">Nothing</h2>
      ) : (
        <>
          <h2 className='bot bott'>Weather</h2>
          <h2 className='bot'>{city.weather[0].description}</h2>
        </>
      )}
      </div>
    </>
  );
}

export default Container;

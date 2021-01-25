import React, { useState, useEffect } from "react";

function Container() {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("Faisalabad");
  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b84f47b108fd54f27461f6ec07f83c60`;
      const response = await fetch(url);
      const resjson = await response.json();
      console.log(resjson);
      setcity(resjson.main);
    };
    fetchapi();
  }, [search]);
  return (
    <>
      <div className="wraper">
        <h1 className="top">Today's Weather</h1>
        <div className="inp">
          <input
            type="search"
            onChange={(eve) => setsearch(eve.target.value)}
            value={search}
          />
        </div>
        {!city ? (
          <h2 className="nodata ther">No Data Found</h2>
        ) : (
          <>
            <div className="dis">
              <i className="fas fa-street-view stree"></i>
              <h2 className="city">{search}</h2>
            </div>
            <div className="showtem">
              <h2 className="tem">{city.temp}°C</h2>
              <br />
              <pre>
                <h3 className="tem">
                  Min {city.temp_min}°C || Max {city.temp_max}°C
                </h3>
              </pre>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Container;

import React,{useState,useEffect} from 'react'

function Container() {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState('Karachi')
    useEffect(() => {
        const fetchapi= async ()=>{
     const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b84f47b108fd54f27461f6ec07f83c60`;
     const response = await fetch(url);
     const resjson = await response.json();
      setcity(resjson.main)
        }
        fetchapi();
    }, [search])
    return (
        <>
        <div className='wraper'>
            <div className='inp'>
            <h1 className='top'>Todays Weather</h1>
                <input type='search' onChange={(eve)=> setsearch(eve.target.value)} value={search}/>
            </div>
            {!city ? (
                <p className='nodata'>No Data Found</p>
            ) : (
                <>
                <div className='dis'>
                <i className="fas fa-street-view stree" ></i>
                <h2 className='city'>{search}</h2>
            </div>
            <div className='showtem'>
            <h2>{city.temp}°C</h2>
              <h3>Min{city.temp_min}°C || Max{city.temp_max}°C</h3>
            </div>
        </>
            )

            }
            </div>
        </>
    )
}

export default Container;
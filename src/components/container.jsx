import React,{useState,useEffect} from 'react'

function Container() {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState('Pune')
    useEffect(() => {
        const fetchapi= async ()=>{
     const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b84f47b108fd54f27461f6ec07f83c60`;
     const response = await fetch(url);
     const resjson = await response.json();
      setcity(resjson)
        }
        fetchapi();
    }, [search])
    return (
        <>
        <div className='wraper'>
            <div className='inp'>
                <input type='search' onChange={(eve)=> setsearch(eve.target.value)}/>
            </div>
            <div className='dis'>
                <i className="fas fa-street-view stree" ></i>
                <h2 className='city'>{search}</h2>
            </div>
            <div className='showtem'>
            <h2>30</h2>
              <h3>min max</h3>
            </div>
        </div>
        </>
    )
}

export default Container;
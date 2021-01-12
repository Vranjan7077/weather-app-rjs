
import './App.css';

import React,{useState} from 'react';




const api={
  key:"4c49b6c6ea62c569a74841f1d60ddf9d",
  base:"https://api.openweathermap.org/data/2.5/"
}




function App() {


  const [query,setQuery]=useState('');
  const [weather,setweather]=useState({});


  const search = eventfunction =>{
    if(eventfunction.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then (result=>{
        setQuery('');
        setweather(result);
    });
  }
  }  




  const dateGenerator = (dated)=>{

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[dated.getDay()];
    let date = dated.getDate();
    let month=months[dated.getMonth()];
    let year=dated.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }




  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app'? 'app cold' : 'app'? 'app rainy' : 'app') : 'app'}>
      <main>
        <div className="search-box main-content container_shadow">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main!="undefined")?(

          <div>
              <div className="location-box">
                <div className="location">
                    {weather.name},{weather.sys.country}
                </div>
                <div className="date">
                    {dateGenerator(new Date())}
                </div>
            </div>

            <div className="weather-box">
              <div className="temp">
                  {Math.round(weather.main.temp)}*c
              </div>
              <div className="weather">
                  {weather.weather[0].main}
              </div>
            </div>

          </div>





        ):('')}

        



      </main>
    </div>
  );
}

export default App;

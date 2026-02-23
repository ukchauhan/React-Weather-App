import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "43c92e70874b3e25d401e59421fbab31";


    let getWetherinfo = async()=>{
    try {
     let response  =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description    
      };
      console.log(result);
      return result;
    }catch(error){
        throw error;
    }
    
}

    //Add city to search box
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    };

    // on submit function handle it
    let handleSubmit = async(evt)=>{
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo = await getWetherinfo();
      updateInfo(newInfo);
    }catch(error){
        setError(true);
    }
    }

    return(
        <div className='SearchBox'>
    
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city"
                 label="City Name"
                 variant="outlined"
                value={city}onChange={handleChange} 
                required/>
                <br /><br /><br />

                <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place Exists !</p>}
            </form>
        </div>  
    )
}
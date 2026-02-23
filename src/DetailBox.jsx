import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./DetailBox.css";

export default function DetailBox({info}){
    const INT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        <div>
            <h1>Weather information </h1>
            <div className='details'>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        //image={info.humidity > 70 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        image={
                            parseFloat(info.humidity) > 70
                              ? COLD_URL
                              : parseFloat(info.temp) > 15
                              ? HOT_URL
                              : RAINY_URL
                          }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            parseFloat(info.humidity) > 70
                              ? <ThunderstormIcon/>
                              : parseFloat(info.temp) > 15
                              ? <SunnyIcon/>
                              : <AcUnitIcon/>
                          }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}> 
                            <div>Temprature = {info.temp}&deg;C</div>
                            <div>Humidity : {info.humidity}</div>
                            <div>Min Temp = {info.tempMin}&deg;C</div>
                            <div>Max Temp = {info.tempMax}&deg;C</div>
                            <div> The weathe can be described as <i> {info.weather}</i> and feels like {info.feelslike}&deg;C.</div>

                        </Typography>
                    </CardContent>
                    </Card>
            </div>

        </div>
    )
}
import {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import WeatherDay from "./WeatherDay";

class Weather extends Component { 

  

  render() {
    
    return (
      <ListGroup numbered>
        <ListGroupItem id="forecast-title">3 Day Forecast</ListGroupItem>
        {this.props.weather.map (day => 
          <WeatherDay key={day.date} date={day.date} description={day.description}/>
          )}
      </ListGroup>
      );
  }
}

  export default Weather;
import {Component} from 'react';
import { ListGroup } from 'react-bootstrap';

class Weather extends Component { 

  render() {
    
    
    return (
      <ListGroup numbered>
        <h3>3 Day Forecast: </h3>
        {this.props.weather.map (day => 
          <ListGroup.Item key={day.date}>
            <p>Date: {day.date}</p>
            <p>Description: {day.description}</p>
          </ListGroup.Item>
          )}
      </ListGroup>
      );
  }
}

  export default Weather;
import {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Weather extends Component { 

  render() {
    
    return (
      <ListGroup numbered>
        <ListGroupItem id="forecast-title">3 Day Forecast</ListGroupItem>
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
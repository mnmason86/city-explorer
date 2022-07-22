import {Component} from 'react';
import Card from 'react-bootstrap/Card';

const apiKey = process.env.REACT_APP_CITY_KEY;

class CityInfo extends Component {


  render() {
    return(
        <Card id="city-display">
          <Card.Title>City Name: {this.props.name}</Card.Title>
          <Card.Text>Latitude: {this.props.lat}</Card.Text>
          <Card.Text>Longitude: {this.props.lon}</Card.Text>
          <Card.Img id="map-image"style={{width: '100%'}}src={`https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${this.props.lat},${this.props.lon}&zoom=12&size=480x480`}/>
          <Card.Body></Card.Body>
        </Card>
       
    )    
  }
}

export default CityInfo;
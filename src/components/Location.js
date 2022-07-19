import {Component} from 'react';
import CityInfo from './CityInfo';
import Error from './Error';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const apiKey = process.env.REACT_APP_CITY_KEY;

class Location extends Component {
  
  constructor(){
    super();
    this.state = {
      lat: 0.00,
      lon: 0.00,
      name: '',
      error: { status: null, message: null}
    }
  }

  getLocation = (query) => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json`;
    axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({
          lat: response.data[0].lat,
          lon: response.data[0].lon,
          name: response.data[0].display_name,
          error: { status: null, message: null}
        });
      })
      .catch(error => {
        console.log(error);
        this.setState ({
          lat: 0,
          lon: 0,
          name: '',
          error: {
            status: error.response.status,
            message: error.response.data.error,
          }
        });
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.getLocation(e.target.city.value);
    }

  render(){
    return (
      <>
        <Form onSubmit={this.handleSubmit} id="city-form">
          <Form.Label>Search For A City</Form.Label>
          <Form.Control id="search-input" name="city" type="text" placeholder="Enter City Name" />
          <Button variant="primary" type="submit" >Explore!</Button>
        </Form>
        {this.state.name && <CityInfo {...this.state}/>}
        {this.state.error.status && <Error id="city-error" {...this.state}>
          
        </Error>}
      </>
    )
  }
}

export default Location;
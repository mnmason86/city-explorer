import {Component} from 'react';
import CityInfo from './CityInfo';
import Weather from './Weather';
import Movies from './Movies';
import Error from './Error';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const apiKey = process.env.REACT_APP_CITY_KEY;
const herokuURL = process.env.REACT_APP_HEROKU_URL;

class Location extends Component {
  
  constructor(){
    super();
    this.state = {
      lat: 0.00,
      lon: 0.00,
      name: '',
      weather: [],
      movies:[],
      error: { status: null, message: null}
    }
  }
 
  getLocation = (query) => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json`;
    axios.get(url).then(response => {

        let data = response.data[0];
        
        this.setState({
          lat: data.lat,
          lon: data.lon,
          name: data.display_name,
          error: { status: null, message: null},
        });
          this.getWeather(data.lat, data.lon, query);
  
          this.getMovies(query);
        
      })
      .catch((error) => {
        if (error.response){
            let message = `${error.response.data.error}. ${error.message} ${error.code}.`;
            this.setState({error:{ status: error.response, message: message}});
          }
        });
      }
      

      //send request to get weather values

  getWeather = async (lat,lon,name) => {
    let queryName = [];
    let targetComma = name.indexOf(',',0);
    let char = name.slice(0,targetComma);
    queryName.push(char);

    let url = `${herokuURL}/weather?lat=${lat}&lon=${lon}&searchQuery=${queryName}`;

    try {

    let response = await axios.get(url);
      this.setState({
        weather: response.data,
      }); 
      } catch (e) {
        this.setState({ error: e});
    }
  }

 // send request to server for movie data

  getMovies = async (cityName) => {
    let url = `${herokuURL}/movies?city_name=${cityName}`;
    
    try{
      let response = await axios.get(url);
        this.setState({
          movies: response.data,
        });
    } catch (e) {
        this.setState({ error: e});
    } 
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
        {this.state.error.status && <Error id="city-error" {...this.state}></Error>}
        
        {this.state.name && <Weather {...this.state}/>}
        {this.state.name && <Movies {...this.state}/>}
      </>
    )
  }
}

export default Location;
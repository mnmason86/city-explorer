import {Component} from 'react';
//import Error from './Error';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const apiKey = process.env.REACT_APP_CITY_KEY;


class Location extends Component {
  
  constructor(props){
    super(props);
    this.state={
      lat: 0.00,
      lon: 0.00,
      name: '',
      error: { status: null, message: null}
    }
  }

  getLocation = (query) => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.state.searchQuery}&format=json`;
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
        this.setState ({
          error: {
            status: error.response.status,
            message: error.response.data.message,
          }
        })
        console.log(error);
      });
    }
  handleClose = () => this.setState({ show: false});

  render(){
    return (
      <>
        
      </>
    )
  }
}

export default Location;
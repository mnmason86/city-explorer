import {Component} from 'react';
import axios from 'axios';



class CityForm extends Component {
  
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      location: {},
      show: false
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log(response.data[0]);
    this.setState({ location:response.data[0], show:true });
  }
  handleClose = () => this.setState({ show: false});

  render(){
    return (
      <>
        <input onChange={(e) => this.setState({searchQuery: e.target.value })} placeholder="Search by City Name"></input>
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.location.place_id && <h2>City: {this.state.location.display_name}</h2>}
      </>
    )
  }
}

export default CityForm;
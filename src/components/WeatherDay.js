import {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';

class WeatherDay extends Component {
  render(){
    return(
      <ListGroupItem>
        <h5>{this.props.date}</h5>
        <p>{this.props.description}</p>
      </ListGroupItem>
    )
  }

}

export default WeatherDay;
import {Component} from 'react';
import {Card} from 'react-bootstrap';

class Movie extends Component {
  render(){
    return(
      <Card id="movie-card">
        <Card.Title>Title: {this.props.movie.title}</Card.Title>
        <Card.Text>Release Date: {this.props.movie.released_on}</Card.Text>
        <Card.Img src={this.props.movie.image_url} alt='' />
        <Card.Text>Overview: {this.props.movie.overview}</Card.Text>
        <Card.Text>popularity: {this.props.movie.popularity}, average votes: {this.props.movie.vote_average}, total votes: {this.props.movie.vote_average}</Card.Text>
      </Card>
    )
  }
}

export default Movie;
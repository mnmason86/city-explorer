import {Component} from 'react';
import {Card} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {Row} from 'react-bootstrap';



class Movies extends Component {

  render() {
  
    return (
      <>
        <ListGroupItem id="movies-title">Related Movies</ListGroupItem>
        <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
          {this.props.movies.map (movie => 
            <Card id="movie-card">
              <Card.Title>Title: {movie.title}</Card.Title>
              <Card.Text>Release Date: {movie.released_on}</Card.Text>
              <Card.Img src={movie.image_url} alt='' />
              <Card.Text>Overview: {movie.overview}</Card.Text>
              <Card.Text>popularity: {movie.popularity}, average votes: {movie.vote_average}, total votes: {movie.vote_average}</Card.Text>
            </Card>
            )}
          </Row>
      </>
      );
  }
}

export default Movies;
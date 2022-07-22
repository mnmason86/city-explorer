import {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Movie from './Movie';


class Movies extends Component {

  render() {
    return (
      <>
        <ListGroupItem id="movies-title">Related Movies</ListGroupItem>
        <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
          {this.props.movies.map (movie => 
            <Movie key={movie.title} movie={movie}/>
            )}
          </Row>
      </>
      );
  }
}

export default Movies;
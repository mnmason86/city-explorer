import {Component} from 'react';
import Alert from 'react-bootstrap/Alert';


class Header extends Component{

render(){
  return (
    <Alert variant={'success'} style={{fontSize: '45px', marginTop: '1rem'}}>
      City Explorer
    </Alert>
    )
  }
}

export default Header;
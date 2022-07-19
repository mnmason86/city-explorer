import React from 'react';
// import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Location from './components/Location';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;

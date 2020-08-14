import React from 'react';
import {DISHES} from './shared/dishes';
import {Component} from 'react';
import './css/App.css';
import Main from './Component/MainComponent';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


  
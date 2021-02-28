import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import List from "./components/list.component";
import Edit from "./components/edit.component";
import AddRemove from "./components/add.remove.component";

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/posts').then((res) => {
      const response = res.data;
      this.setState({response});
      console.log(response);
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={List} />
          <Route path="/add" component={AddRemove} />
          <Route path="/edit" component={Edit} />
          
        </div>
      </Router>
    );
  }
}

export default App;


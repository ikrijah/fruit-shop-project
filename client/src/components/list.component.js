import React, { Component } from 'react';
import axios from 'axios';
import Tableau from './tableau.component';
import Header from './header.component';

export default class List extends Component {

  constructor(props){
    super(props);
    this.state={tableaux:[]};
  }


  componentDidMount(){
    axios.get('https://fruit-shop-project.herokuapp.com/api/v1/list') 
      .then(res => this.setState({tableaux:res.data}))
      .catch((error)=>{
        console.log(error);
      })
  }


  tableList(fruit){
    return this.state.tableaux.map(currentTable =>{
      return <Tableau fruit={fruit} tableau={currentTable} key={currentTable._id}></Tableau>
    })
  }

  tableHeader(){
    return this.state.tableaux.map(currentTable =>{
      return <Header tableau={currentTable} key={currentTable._id}></Header>
    })
  }

  render() {
    return (
        <table className="table table-dark">
          <thead>
                  <tr>
                      <th scope="col">#</th>
                      {this.tableHeader()}
                  </tr>
          </thead>
          <tbody>
            <tr>
            <th scope="row">Orange</th>
            {this.tableList("orange")}
            </tr>
            <tr>
            <th scope="row">Banane</th>
            {this.tableList("banane")}
            </tr>
            <tr>
            <th scope="row">Pomme</th>
            {this.tableList("pomme")}
            </tr>
            <tr>
            <th scope="row">Fraise</th>
            {this.tableList("fraise")}
            </tr>
            <tr>
            <th scope="row">Cerise</th>
            {this.tableList("cerise")}
            </tr>
          </tbody>
        </table>
    )
  }
}
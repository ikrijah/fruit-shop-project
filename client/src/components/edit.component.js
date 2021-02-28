import React, { Component } from 'react';
import Inputfruit from './inputfruit.component';
import axios from 'axios';

export default class Edit extends Component {


constructor(props){
    super(props);

    this.onChangeShopLocation = this.onChangeShopLocation.bind(this);
    this.onChangeShopLocationDestination = this.onChangeShopLocationDestination.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
        shopLocation :'',
        shopLocationDestination :'',
        stock:{
          orange: 0,
          banane: 0,
          pomme: 0,
          fraise: 0,
          cerise: 0
        }
    }
}



onChangeShopLocation(event){
  this.setState({shopLocation: event.target.value});
}

onChangeShopLocationDestination(event){
  this.setState({shopLocationDestination: event.target.value});
}

onChangeNumber(event){
  this.setState({[event.target.name]:event.target.value});
}

onSubmit(e){
    e.preventDefault();

    const post = {
      shopLocation: this.state.shopLocation,
      shopLocationDestination: this.state.shopLocationDestination,
      stock:{
        orange: this.state.orange,
        banane: this.state.banane,
        pomme: this.state.pomme,
        fraise: this.state.fraise,
        cerise: this.state.cerise
      }
    };

    console.log(JSON.stringify(post));

    axios.post('https://fruit-shop-project.herokuapp.com/api/v1/edit' ,post) 
      .then(res => console.log(res.data));
}

  render() {
    return (
        <div>
      <h3>Transfer de fruits </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Shop Location From: </label>
          <select
              required
              className="form-control"
              value={this.state.shopLocation}
              onChange={this.onChangeShopLocation}>
            <option value="">--Choisir--</option>
            <option value="marseille">Marseille</option>
            <option value="paris">Paris</option>
            <option value="dijon">Dijon</option>
            <option value="nice">Nice</option>
            <option value="lille">Lille</option>

          </select>

          <label>Shop Location To: </label>
          <select
              required
              className="form-control"
              value={this.state.shopLocationDestination}
              onChange={this.onChangeShopLocationDestination}>
            <option value="">--Choisir--</option>
            <option value="marseille">Marseille</option>
            <option value="paris">Paris</option>
            <option value="dijon">Dijon</option>
            <option value="nice">Nice</option>
            <option value="lille">Lille</option>

          </select>

        </div>

        <Inputfruit 
            name = "orange"
            value={this.state.stock.orange}
            onChange={this.onChangeNumber}>
            
        </Inputfruit>

        <Inputfruit 
            name = "banane"
            value={this.state.stock.banane}
            onChange={this.onChangeNumber}>
        </Inputfruit>

        <Inputfruit 
            name = "pomme"
            value={this.state.stock.pomme}
            onChange={this.onChangeNumber}>
        </Inputfruit>

        <Inputfruit 
            name = "fraise"
            value={this.state.stock.fraise}
            onChange={this.onChangeNumber}>
        </Inputfruit>

        <Inputfruit 
            name = "cerise"
            value={this.state.stock.cerise}
            onChange={this.onChangeNumber}>
        </Inputfruit>


        <div className="form-group">
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </form>

    </div>
    
    )
  }
}
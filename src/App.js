import React, {Component} from 'react'
import './App.css';
import Car from "./Car/Car";

class App extends Component {

  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2015 },
      { name: 'Mazda', year: 2019 },
      { name: 'Жигули', year: 1985 }
    ],
    pageTitle: 'React Components'
  }

  changeTitleHandler = () => {
    console.log('click');
  }

  render() {

    const cars = this.state.cars;

    const divStyle = {textAlign: 'center'};
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>Change Title</button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
        <Car name={cars[3].name} year={cars[3].year} />
      </div>
    );
  }

}

export default App;

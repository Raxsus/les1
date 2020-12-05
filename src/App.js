import React, {Component} from 'react'
import './App.css';
import Car from "./Car/Car";

class App extends Component {

  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2015 },
      { name: 'Mazda', year: 2019 },
      { name: 'Жигули', year: 1985 },
      { name: 'Волга', year: 1991 }
    ],
    pageTitle: 'React Components',
    showCars: false
  }

  onChangeName = (name, index) => {
    // Clone array
    const cars = [...this.state.cars];
    cars[index].name = name
    this.setState({cars});
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler (index) {
    // Clone array
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars })
  }

  render() {

    const divStyle = {textAlign: 'center'};

    let cars = null;

    if (this.state.showCars){
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        );
      });
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        {/* Better to use .bind */}
        <button onClick={this.toggleCarsHandler}>
          Toggle Cars
        </button>

        { cars }
      </div>
    );
  }

}

export default App;

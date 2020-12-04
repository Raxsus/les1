import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

function App() {
  const divStyle = {textAlign: 'center'};
  return (
    <div style={divStyle}>
      <h1>Hellow World!!!</h1>
      <Car carName={'Ford'} year={Math.round(Math.random() * 1000)}></Car>
      <Car carName={'Mazda'} year={Math.round(Math.random() * 1000)}></Car>
    </div>
  );
}

export default App;

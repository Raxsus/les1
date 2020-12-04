import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

function App() {
  const divStyle = {textAlign: 'center'};
  return (
    <div style={divStyle}>
      <h1>Hellow World!!!</h1>
      <Car></Car>
    </div>
  );
}

export default App;

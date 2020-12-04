import './App.css';
import Car from "./Car/Car";

function App() {
  const divStyle = {textAlign: 'center'};
  return (
    <div style={divStyle}>
      <h1>Hello World!!!</h1>
      <Car carName={'Ford'} year={Math.round(Math.random() * 1000)}>
        <p style={{color: 'red'}}>COLOR</p>
      </Car>
      <Car carName={'Mazda'} year={Math.round(Math.random() * 1000)}>
        <p style={{color: 'blue'}}>COLOR</p>
      </Car>
    </div>
  );
}

export default App;

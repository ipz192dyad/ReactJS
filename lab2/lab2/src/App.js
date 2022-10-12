import './App.css';
import { MyCounter } from './components/Counters/MyCounter';
import { CounterList } from './components/Counters/CounterList';
import { TableComp } from './components/Table/Table';
import { Game } from './components/Game';
import Container from '@mui/material/Container';

const numbers = {
  min: -5,
  max: 10,
  cNumber: 7
}

const counters = [
  {id: 1},
  {id: 2, cNumber: 6},
  {id: 3, cNumber: 5, min: -5, max: 10},
]

const cart = [
  { name: "Constructor Lego", price: 300 },
  { name: "Train Station", price: 200, min: 5 },
  { name: "Hot Wheels Track", price: 150, max: 5 },
]

function App() {
  return (
    <div className="App">
      <Container fixed>
            {MyCounter(numbers)}
            {CounterList(counters)}
            {TableComp(cart)}
            {Game()}
      </Container>
    </div>
  );
}

export default App;

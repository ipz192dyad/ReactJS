import './App.css';
import Container from '@mui/material/Container';
import Task1 from './components/Task1';
import Form from "./components/yup/Form";

const cities = [
  {id: 1, name: "Zhytomyr"},
  {id: 2, name: "Kyiv"},
  {id: 3, name: "Poltava"},
  {id: 4, name: "Los Angeles"},
  {id: 5, name: "Lviv"},
  {id: 6, name: "Las Vegas"},
  {id: 7, name: "Berdichiv"},
]

const palettes = [
  {id:0, value: 111, label: "Палета 1"},
  {id:1, value: 222, label: "Палета 2"},
  {id:2, value: 333, label: "Палета 3"},
  {id:3, value: 444, label: "Палета 4"},
]

const packages = [
  {id: 0, label: "Конверт 1"},
  {id: 1, label: "Конверт 2"},
  {id: 2, label: "Конверт 3"},
  {id: 3, label: "Конверт 3"},
  {id: 4, label: "Коробка 1"},
  {id: 5, label: "Коробка 2"},
  {id: 6, label: "Коробка 3"}
]

const returnTypes = [
  {id: 0, label: "Документи"},
  {id: 1, label: "Грошовий переказ"},
]

function App() {
  return (
    <Container>
      <Task1/>
      <Form cities={cities} palettes={palettes} packages={packages} returnTypes={returnTypes}/>
    </Container>
  );
}

export default App;

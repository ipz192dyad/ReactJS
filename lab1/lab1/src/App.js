import logo from './logo.svg';
import './App.css';
import {Task1} from "./components/Task1";
import {Task2} from "./components/Task2";
import {Task3} from "./components/Task3";
import Container from 'react-bootstrap/Container';
import {ProductList} from "./components/ProductList";
import {CitySelector} from "./components/CitySelector";
import {Task6} from "./components/Task6";


const name = {
    firstname: "Yaroslav",
    lastname: "Demchenko"
}
const birth_date = {
    date: "18",
    month: "01",
    year: "2002"
}

const products = [
    {
        title: "Мобільний телефон Samsung Galaxy S22 Ultra 12/512 GB Phantom Black",
        img: require('./assets/1.jpg'),
        imgAlt: "Мобільний телефон Samsung Galaxy S22 Ultra 12/512 GB Phantom Black",
        price: {
            old_price: 61999,
            price: 54999
        }
    },
    {
        title: "Мережевий фільтр-подовжувач RZTK Power Strip 2+2 USB-A+USB-C Black",
        img: require('./assets/2.jpg'),
        imgAlt: "Мережевий фільтр-подовжувач RZTK Power Strip 2+2 USB-A+USB-C Black",
        price: {
            old_price: 599,
            price: 499
        }
    },
    {
        title: "Крісло Новый Стиль MATRIX ANYFIX ordf CHR68 SORO-93 Сіре",
        img: require('./assets/3.jpg'),
        imgAlt: "Крісло Новый Стиль MATRIX ANYFIX ordf CHR68 SORO-93 Сіре",
        price: {
            available: "Немає в наявності"
        }
    },
    {
        title: "Кава розчинна Jacobs Monarch 500 г",
        img: require('./assets/4.jpg'),
        imgAlt: "Кава розчинна Jacobs Monarch 500 г",
        price: {
            price: 439
        }
    },
]

const cities = [
    {id: 1, name: "Chicago", image: 'chicago.jpg'},
    {id: 2, name: "Los Angeles", image: 'los-angeles.jpg'},
    {id: 3, name: "New York", image: 'new-york.jpg'},
]

const colors = {
    colors: ["red", "black", "yellow", "blue"],
    text: "Example of a colored text",
    text_color: "red"
}

function App() {

  return (
    <div className="App">
        <Container>
            {Task1()}
            {Task2()}
            {Task3(name, birth_date)}
            {ProductList(products)}
            {CitySelector(cities)}
            {Task6(colors)}
        </Container>

    </div>
  );
}

export default App;

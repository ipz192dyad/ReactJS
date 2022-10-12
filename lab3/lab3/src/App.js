import './App.css';
import { TableT } from './components/Table';
import Container from '@mui/material/Container';

const dataURL = 'https://jsonplaceholder.typicode.com/photos'


function App() {
  return (
    <div className="App">
      <Container fixed>
        {TableT(dataURL)}
      </Container>
      
    </div>
  );
}

export default App;

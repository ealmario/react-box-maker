import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <Box width={300} height={150} color="steelblue"/>
      <Box width={100} height={50} color="purple"/>
    </div>
  );
}

export default App;

import './App.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <h1>Box Maker</h1>
      <Box width={300} height={150} color="steelblue"/>
    </div>
  );
}

export default App;

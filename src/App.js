import './App.css';
import BoxForm from './components/BoxForm';
import BoxList from './components/BoxList';

function App() {
  return (
    <div className="App">
      <h1 className="title">Color Box Maker Thingy</h1>
      <BoxForm />
      <BoxList />
    </div>
  );
}

export default App;


import './App.css';
import data from "./data.json"
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';

function App() {
  return (
    <div className="App">
      <h1 style={{"color":"blue"}}>Manufac</h1>
      <hr/>
      <LineChart data={data} />
      <hr/>
      <BarChart data={data} />
    </div>
  );
}

export default App;

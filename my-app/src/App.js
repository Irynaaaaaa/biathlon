import './App.css';
import {Participant} from './components/participant/participant';
import {table} from './components/participant/table';

function App() {
  return (
    <div className="App">
        <Participant table = {table}/>
    </div>
  );
}

export default App;

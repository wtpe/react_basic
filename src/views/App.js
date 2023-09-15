import Condition from './Condition.js'
import './App.scss';
import Test from './Test';
import InputEvent from './InputEvent.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <InputEvent />
        <Condition />
      </header>
    </div>
  );
}

export default App;

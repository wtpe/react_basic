import RadioButton from "./RadioButton";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    setCounter(counter + 1)
  }
  return (
    <RadioButton />
  );
}

export default App;

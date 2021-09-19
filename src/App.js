import {useState} from 'react'
import Item from "./component/Item"

function App() {
  const[toggle, setToggle] = useState(false);
  const changeInput = () => {
    if(!toggle) setToggle(true);
    else setToggle(false)
  }
  return (
    <div className="App">
      <div className={toggle ? "box" : "salmon" }>
        <h1>Hello react !</h1>
        <button onClick={changeInput}>Change state !</button>
        <h1>this state is {toggle ? "true" : "false"}</h1>
      </div>
    </div>
  );
}

export default App;


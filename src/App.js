import {useState} from 'react'
import Item from "./component/Item"

function App() {

  const[inputData, setInputData] = useState();

  const changeInput = (e) => {
    console.log(setInputData(e.target.value))
  }
  return (
    <div className="App">
        <h1>Hello react !</h1>
        <input 
        value={inputData}
        type="text" onInput={e => changeInput(e)}/>
      <Item title={inputData}></Item>
    </div>
    
  );
}

export default App;


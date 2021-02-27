import './App.css';
import { useState } from 'react';
function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  const onTextChange = (event) =>{
    setText(event.target.value);
  };
  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };
  const keyPress = (event) => {

    if (event.which === 13){
      onSend();
    }
  }
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
        lines.map(x => {
          return <div className="App-chatroom-text">
                {x}
                </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
<<<<<<< HEAD
        value={text} onChange={onTextChange}onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
=======
        value = {text} onChange= {onTextChange} onKeyPress={keypress}/>
        <div className="App-textbox-send"onClick={onSend}>Pow!</div>
>>>>>>> 3c35731c9e5198a828f564d987929f81e6d5989b
      </div>
    </div>
  );
}

export default App;

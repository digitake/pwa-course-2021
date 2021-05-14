import './App.css';
import { useState } from 'react';


function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const onTextChange = (event) =>{
    setText(event.target.value)
  };

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

const onSend = () => {
  setLines(lines => [...lines, text])
  setText("");
}

  return (

    <div className="App">
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
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>

        <div className="App-textbox-send" onClick={onSend}>Send!</div>
        </div>
   
    </div>
  );
}
export default App;

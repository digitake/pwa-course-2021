import './App.css';
import {useState} from 'react';
import { Link } from "react-router-dom";


function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  }

  return (
    <div className="App">
      <Link to="/friend-list">
      <div className="App-textbox-back" onClick={onSend}>BACK</div>
      </Link>
      <div className="App-header">
        REACT CHAT
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
      <input type="text" className="App-textbox-Input" 
      value={text} onChange={onTextChange} onKeyPress={keyPress}/>

      <div className="App-textbox-send" onClick={onSend}>Send</div>
      </div>
    </div>
  );
}

export default App;

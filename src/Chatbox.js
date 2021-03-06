import { useState } from 'react';
import './Chatbox.css';
import App from './App';

function Chatbox() {

  const [text, setText] = useState("");

  const[Lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines(lines =>[...lines, text]);
    setText("");
  };

  return (
    <App>
    <div className="App">
      <div className="App-chatroom">
        {
          Lines.map(x =>{
              return <div className="App-chatroom-text">
                {x}
                </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>
    
  );
}

export default Chatbox;

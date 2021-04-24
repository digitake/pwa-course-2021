import './Chatbox.css';
import {useState} from 'react';
import App from './App';

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, text]);    
    setText("");
  };

  const KeyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  }

  return (
    <App>
    <div className="App">
      <div className="App-header">
        BRIGHT CHAT
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
        value={text} onChange={onTextChange} onKeyPress={KeyPress}/>

        <div className="App-textbox-send" onClick={onSend}>Send</div>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;

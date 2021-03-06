import './Chatbox.css';
import {useState} from 'react';
import App from './App';

function Chatbox() {

const [text, serText] = useState("");
const [lines, setLines] = useState([]);

const onTextChange = (event) => {
  serText(event.target.value)
};

const onSend = () =>{
  setLines([...lines, text])
};

const keyPress = (event) => {
  if (event.which === 13){
    onSend();
  }
}
  return (
    <App>
    <div className="App">
      <div className="App-header">
      <Link to="/friend-list">
          <button>
              Friend-list
          </button>
      </Link>
      </div>
      <div className="App-chatroom">
       { lines.map(x => {
          return <div className="App-chatroom-text">
            {x}
          </div>
          })
        }
          </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="App-textbox-send" onClick={onSend}  >Send!</div>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;

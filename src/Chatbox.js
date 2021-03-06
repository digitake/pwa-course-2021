<<<<<<< HEAD
import './Chatbox.css';
import {useState} from 'react';
=======
import { useState } from 'react';
>>>>>>> b49edfa271afdd785d6876546f642c3293919999
import App from './App';

function Chatbox() {

<<<<<<< HEAD
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
=======
    const [text, setText] = useState('');
    const [lines, setLines] = useState([]);

    const onSend = () => {
        if (text.length < 1) return;
        setLines([...lines, text]);
        setText("");
    }

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onKeyPress = (event) => {
        if (event.which === 13) {
            onSend();
        }
    }

    return (
        <App>
            <div className="App-chatroom">
                {
                    lines.map(msg => {
                        return <div key={msg} className="App-chatroom-text">
                            {msg}
                        </div>
                    })
                }
            </div>

            <div className="App-textbox">
                <input placeholder='Type something...' type="text" className="App-textbox-input" value={text} onKeyPress={onKeyPress} onChange={onTextChange} />
                <div className="App-textbox-send" onClick={onSend}>Send!</div>
            </div>
            <div>
            </div>
        </App>
    );
>>>>>>> b49edfa271afdd785d6876546f642c3293919999
}

export default Chatbox;

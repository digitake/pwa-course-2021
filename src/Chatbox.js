import './Chatbox.css';
import {useState , useEffect} from 'react';
import App from './App';

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect (() => {
    alert("Total lines = ", + lines.length);
  }, [lines]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, {
      sender : "Me",
      message: text,
      timestamp: (new Date())
      }]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13) {
      onSend();
    }
  }

  return (
    <App>
    <div className="App col-6">
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
              <div className= "App-chatroom-text-sender">
              {x.sender+": "}
              </div>
              <div className= "App-chatroom-text-massage">
                <div>
                {x.message}
                </div>
                <div>
                {x.timestamp.toLocaleString()}
              </div>
              </div>
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
    </App>
  );
}

export default Chatbox;

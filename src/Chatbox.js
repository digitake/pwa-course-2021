import './Chatbox.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Chatbox() {
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
      <Link to="/friend-list">
                <botton>
                    Go to Friendlist
                </botton>
            </Link>
      </div>
      <div className="App-chatroom">
        {
        lines.map(x => {
          return <div className="App-chatroom-text">
                {x}
                </div>
          })
        }
        <Link to ="/PageDrawing">
          <botton>
            Go to PageDrawing
          </botton>
        </Link>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange}onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;

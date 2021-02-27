import { useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

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
    if (event.which === 13){
      onSend();
    }
  };
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
        <Link to ="/friend-list">
          <botton>
            Go to FriendList
          </botton>
        </Link>
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

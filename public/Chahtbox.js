import './Chatbox.css';
import {useState} from 'react';
import App from './App'

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

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

  return (
<App>
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
</App>
  );
}

export default Chatbox;
import { Link } from 'react-router-dom';
import './App.css';
import FriendList from './FriendList';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
        DOGEBOOK
        <Link to="friend-list">
          <button>
            Go to FriendList
          </button>
        </Link>
      </div>
        <div className="App-content">
          {children}
        </div>
    </div>
   );
}

export default App;

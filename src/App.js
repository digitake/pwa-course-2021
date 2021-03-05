import { useState } from 'react';                                                                                                                                                                                                                                                                                                   
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [text, setText] = useState("");

  const [lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          lines.map(x =>{
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
      <div>
     <Link to="/friend-list">
        <button>
            Go FriendList
        </button>
     </Link>
    </div>
    <div>
     <Link to="/Profile">
        <button>
            Go Profile
        </button>
     </Link>
    </div>
    </div>
    
  );
}

export default App;

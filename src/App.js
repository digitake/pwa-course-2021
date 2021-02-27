import './App.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [text,setText] = useState("");

  const[lines,setlines] = useState(["App chatroom"]);

  const onTextChange = (event) => {setText(event.target.value);};

  const Onsend = (event) => {
    setlines(lines => [...lines, text]);
    setText("")
  }

  return (
    <div className="App">
      <div className="App-header">
      <Link to="/friend-list" className="my-button">
                <button>
                    Go Friend-list
                </button>
            </Link>
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return<div className="App-chatroom-text">
          {x}
          </div>
        })
      }
       
        <div className="App-chatroom-text">
        <Link to="/support-list" className="my-button">
                <button>
                    Go support-list
                </button>
            </Link>
          {text}
        </div>
        <div className="App-chatroom-text">
          
        </div>
        <div className="App-chatroom-text">
          
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"value={text} onChange={onTextChange}/>
        <div className="App-textbox-send"onClick={Onsend}>Send!</div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {useState} from 'react';
import { Link } from "react-router-dom";
import Chatbox from './Chatbox';

function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const onBack = () =>{
    setLines([...lines, text]);
    setText("");
  };

  return (
    <div className="App col-6">
      <Link to="/friend-list">
      <div className="App-textbox-back" onClick={onBack}>BACK</div>
      </Link>
      <div className="App-header">
        REACT CHAT
      </div>
      <div className="App-content">
        <Chatbox/>
      </div>
    </div>
  );
}

export default App;

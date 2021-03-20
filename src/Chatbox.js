import './Chatbox.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import App from './App';

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
<<<<<<< HEAD
    <div className="App">
      
      <div className="App-header">

            <Link to="/friend-list">
                <button>
                    Go to Friend List
                </button> 
            </Link>  
            <Link to ="/PageDrawing">
          <botton>
            Go to PageDrawing
          </botton>
        </Link>
        
      </div>
      
      <div className="App-chatroom">
        {
        lines.map(x => {
          return <div className="App-chatroom-text">
=======
    <App>
      <div className="Chatbox">
      <div className="Chatbox-chatroom">
        {
        lines.map(x => {
          return <div className="Chatbox-chatroom-text">
>>>>>>> 529244a7e80adccbdb18f8ddba7f78db8ad83c23
                {x}
                </div>
          })
        }
<<<<<<< HEAD
        
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange}onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send</div>
      </div>
    </div>
  );
}

export default App;
=======
      </div>
      <div className="Chatbox-textbox">
        <input type="text" className="Chatbox-textbox-input" 
        value={text} onChange={onTextChange}onKeyPress={keyPress}/>
        <div className="Chatbox-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;
>>>>>>> 529244a7e80adccbdb18f8ddba7f78db8ad83c23

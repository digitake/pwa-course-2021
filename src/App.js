import { useState } from 'react';
import './App.css';
import {useState} from 'react';

function App() {
<<<<<<< HEAD
  const[text, setText] = useState("");

  const [lines, setLines] = useState(["Hello KumFile", "How are you?", "Right now I stay at capital city", "I relexed from my traveling", "I will Say Hi again later!!!!!!jajaja hahaha hahah"]);


=======
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  
>>>>>>> 0e288e4226d73217af9418f2059f16c9cf3f2dc2
  const onTextChange = (event) => {
    setText(event.target.value);
  };

<<<<<<< HEAD
  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

=======
  const onSend = () =>{
    setLines([...lines, text]);
    setText("");
  };

  const keyPress = (event) => {
    if (event.which === 13){
      onSend();
    }
  };

>>>>>>> 0e288e4226d73217af9418f2059f16c9cf3f2dc2
  return (
    <div className="App col-6">
      <div className="App-header">
        
      </div>
      <div className="App-chatroom">
        {
<<<<<<< HEAD

          lines.map (x=>{
            return <div className= "App-chatroom-text">
              {x}
              </div>
          })
        }
        
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value = {text} onChange ={onTextChange}/>
        <div className="App-textbox-send" onClick = {onSend}></div>
=======
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
>>>>>>> 0e288e4226d73217af9418f2059f16c9cf3f2dc2
      </div>
    </div>
  );
}

export default App;

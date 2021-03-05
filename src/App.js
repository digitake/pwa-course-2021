import './App.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

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
      <div className="App-header"> <Link to="/"> <div className="App-back-icon"> <i class="fas fa-chevron-circle-left"></i> </div> </Link>
      Receiver's Name  
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
                    {x}
                   </div>
          })
        }
      </div>
      <div className="App-textbox-icon" ><i class="fas fa-microphone-alt"></i> 
      <i class="fas fa-file-upload hide-when-small"></i>
      <i class="fas fa-plus hide-when-big"></i>
      <i class="fas fa-images hide-when-small"></i> 
      <i class="fas fa-camera"></i> </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}> <i class="far fa-paper-plane"></i> </div>
      </div>
    </div>
  );
}

export default App;

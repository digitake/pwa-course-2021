import './Chatbox.css';
import {useState, useEffect } from 'react';
import App from './App';

function Chatbox() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    alert("Total text chat"+ lines.length);

  }, [lines]);
  
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines, {
      sender: "Me", 
      message: text,
      timestamp: (new Date())
    }]);
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
                            <div>
                              {x.sender+":"}
                            </div>
                            <div>
                              {x.message}
                            </div>
                            <div>
                              {x.timestamp.toLocaleDateString()}
                            </div>
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
    </App>
  );
}

export default Chatbox;

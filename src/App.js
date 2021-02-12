import './App.css';
import { useState } from "react";

function App() {

  const [text , setText ] = useState("");
  const [lines, setLines] = useState(["msg1","msg2","msg3"]);

  const onTextChange = (event) => {setText(event.target.value);
  };

  const onSend = () => {setLines ([...lines, text]);
  setText("");
};

const keyPress = (event) => {if (event.which === 13){onSend();}
  
};
 
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className ="panel-footer">
      </div>
      <div className ="input-group">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          {lines.map(x => {return <div className="App-chatroomn-text">{x}</div>})}
      </div>
      </div>
          <input id = "btn-input" type="text" className="form-control-input-sm" value={text} onChange={onTextChange}  onKeyPress={keyPress}
          placeholder="Type your massage here...." />
          <span className="input-group-btn">
            <button className = "btnbtn-primarybtn-sm" id="btn-chat" onClick={onSend}>Send your massage</button>
          </span>
    </div>
  );
}

export default App;

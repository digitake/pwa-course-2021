import './App.css';
import {useState} from 'react';
function App() {

 
  const [lines,setLines] = useState([
    "","","",""]);

  const [lines,setLines] = useState(["","","",""]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };
  const onSend =() =>{
    setLines([...lines, text])
    setText("");
  };
  const keyPress = (event) =>  {
    if(event.which===13){
      onSend();
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        Cat Chat
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
      VIP Live
        </div>
        <div className="App-chatroom-text">
          Lion 
        </div>
        <div className="App-chatroom-text">
          Cat 
        </div>
        <div className="App-chatroom-text">
          Fisher Man 
        </div>
        <div className="App-chatroom-text">
          {
          lines.map(x => {
          return <div className="App-chatroom-text">
                  {x}
                  </div>
          })
          }

          พิมข้อความ
        </div>
        <div className="App-chatroom-text">
          
        </div>
        <div className="App-chatroom-text">
          {
          lines.map(x => {
          return <div className="App-chatroom-text">
                  {x}
                  </div>
          })
          }
        </div>


      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          

        </div>
      <div className="App-chatroom">

        <div className="App-chatroom-text">

          
        </div>
        <div className="App-chatroom-text">
          
        </div>


      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>ส่งข้อความ</div>


      </div>
    </div>
  );
}

export default App;
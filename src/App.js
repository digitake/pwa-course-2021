import './App.css';
import {useState} from 'react';
function App() {

  const [text,setText] = useState("");
<<<<<<< HEAD
  const [lines,setLines] = useState([
    "","","",""]);
=======
  const [lines,setLines] = useState(["","","",""]);
>>>>>>> 9f58801dc41f0fe52c4bd3606a9014597b7e508d
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
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
<<<<<<< HEAD
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
          
=======

          Only Fan
        </div>
        <div className="App-chatroom-text">
          Here 
        </div>
>>>>>>> 9f58801dc41f0fe52c4bd3606a9014597b7e508d
        </div>
      <div className="App-chatroom">

        <div className="App-chatroom-text">
<<<<<<< HEAD
          
        </div>
        <div className="App-chatroom-text">
          
        </div>


      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>ส่งข้อความ</div>
=======
          VIP Room
        </div>
        <div className="App-chatroom-text">
          Here 

        </div>
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
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>ส่ง</div>
>>>>>>> 9f58801dc41f0fe52c4bd3606a9014597b7e508d
      </div>
    </div>
  );
}

export default App;
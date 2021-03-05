import { Link } from 'react-router-dom';
import { useState } from 'react';
import './FriendList.css';


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
  const img1 = require('./design/balance.jpg')


  return (
    <div className="App">
      <div className="App-header">

      <div className="App-header1" onClick={onSend}></div>
      <div className="App-header2" onClick={onSend}></div>
      <div className="App-header3" onClick={onSend}></div>  

      </div>
      
      <div className="App-bg">
       <div className="App-chatroom-text" onClick={onSend}> </div>
          
        
      </div>


      <div className="App-textbox">
        
       

        <div className="App-textbox-send" onClick={onSend}></div>
        <div className="App-textbox-send1" onClick={onSend}></div>
        <div className="App-textbox-send2" onClick={onSend}></div>
        

      </div>
      <div className="Menu-1">
        <img src={img1}/>
        </div>
    </div>
  );
}



export default App;
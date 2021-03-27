import React, { useState, useEffect } from 'react';
import './Chatbox.css';
import App from './App';


import './onClick.js'


function Chatbox() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  useEffect(() => {
    alert("Total text chat = "+lines.length)
  }, [lines]);

  const onChangeHandler = (event) => {
      setText(event.target.value);
  };

  const onSendHandler = () => {
    setLines([...lines,{
      sender: "Me" , 
      message: text , 
      timestamp: (new Date())
    }]);
    
    setText("");
    
  };

  const keyPress = (event) => {
    if(event.which === 13){
      onSendHandler();
    }
  }

  
  return (
    <App>

    <div className="App">    
    <div className="App-chatroom">
        {

          lines.map(x => {
            return <div className="App-chatroom-text">
                <div>
                  
                  {x.timestamp.toLocaleDateString()+" "}
                  {x.sender+": "}
                
                  {x.message+" "}
                  
                  
                </div>
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" onChange={onChangeHandler} value={text}/>
        <div className="App-textbox-send" onClick={onSendHandler}>ส่ง!</div>

      </div>
      
    </div>
    </App>

    

  );
}

export default Chatbox;

import React, {useState,useEffect} from 'react';
import './ChatBox.css';
import LobbyHeader from "./LobbyHeader";

function ChatBox({children}) {

    const [text, setText] = useState("");

    const [lines, setLines] = useState([]);
    
    // () => {} same as function() {}  --lambda notation
   // useEffect(() => {alert("total text chat =" + lines.length)}, [lines]);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onSend = () => {
        setLines(line => [...lines, {
            sender: "Me : ",
            message: text,
            timestamp: (new Date())
        }]);
        setText("")
    }
    
    const keyPress = (event) =>{if (event.which === 13){onSend();}};

    return (
        <LobbyHeader>
            <div className="App col-12">
                <div className="App-chatroom">
                    {
                        lines.map(x => {
                            return <div className="App-chatroom-text">
                                {x.sender}
                                {x.message}
                                <div className="App-Time-Position">{ " --- " + x.timestamp.toLocaleString() + " --- "}</div>
                                
                            </div>  
                        })
                    }
                </div>
                {children}
                
                {/*ChatBar Input*/}
                <div className="App-textbox">
                    <div className="App-Botton col-1">
                   </div>
                    <input type="text" placeholder="Type Ready to Start!" className="App-textbox-input col-9"
                           value={text}
                           onChange={onTextChange}
                           onKeyPress={keyPress}/>
                    <div className="App-textbox-send col-2" onClick={onSend}>Send!</div>
                </div>
                
            </div>
            
           
        </LobbyHeader>
    );
}

export default ChatBox;

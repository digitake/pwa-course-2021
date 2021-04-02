import { useEffect, useState } from 'react';
import App from './App';
import firebase from './firebase';

const chatroomRef = firebase.database().ref('chatroom-1')

function Chatbox() {

    const [text, setText] = useState('');
    const [lines, setLines] = useState([]);

    useEffect(() => {
        chatroomRef.on('child_added',snapshot => {
            let x = snapshot.val();
            
            setLines(l => [...l,{
                sender : x.sender,
                message : x.message,
                timestamp : new Date(x.timestamp)
            }])
        })
    },[]);

    const onSend = () => {
        chatroomRef.push({
            sender : "Karumpee",
            message : text,
            timestamp : firebase.database.ServerValue.TIMESTAMP
        });
        setText("");
    }

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onKeyPress = (event) => {
        if (event.which === 13) {
            onSend();
        }
    }

    return (
        <App>
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
                                {x.timestamp.toLocaleString()}
                            </div>
                        </div>

                    })
                }
            </div>

            <div className="App-textbox">
                <input placeholder='Type something...' type="text" className="App-textbox-input" 
                value={text} onKeyPress={onKeyPress} onChange={onTextChange} />
               
                <div className="App-textbox-send" onClick={onSend}>Send!</div>
            </div>
            <div>
            </div>
        </App>
    );
}

export default Chatbox;

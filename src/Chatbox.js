import { useEffect, useState } from 'react';
import App from './App';
import firebase from './firebaseConfig';
import './Chatbox.css';

const chatroomRef = firebase.database().ref('chatroom-1');

function Chatbox() {
    const [text, setText] = useState('');
    const [lines, setLines] = useState([]);

    useEffect(() => {
        chatroomRef.on('child_added', snapshot => {
            let x = snapshot.val();
            setLines(line => [...line,
            {
                sender: x.sender,
                message: x.message,
                timestamp: x.timestamp,
            }]);
        })
    }, []);

    const onSend = () => {
        if (text.length < 1) return;
        chatroomRef.push({
            sender: "Who Is This?",
            message: text,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
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
                        return <div key={x.timestamp} className="App-chatroom-text">
                            <div className='messageBox'>
                                <div className='sender'>{x.sender}:</div>
                                <div className='time'>#{x.timestamp} </div>
                            </div>

                            <div className='message'>{x.message}</div>
                        </div>
                    })
                }
            </div>

            <div className="App-textbox">
                <input placeholder='Type something...' type="text" className="App-textbox-input" value={text} onKeyPress={onKeyPress} onChange={onTextChange} />
                <div className="App-textbox-send" onClick={onSend}>Send!</div>
            </div>
            <div>
            </div>
        </App>
    );
}

export default Chatbox;

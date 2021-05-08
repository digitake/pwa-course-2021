import { useEffect, useState } from 'react';
import App from './App';
import firebase from './firebaseConfig';
import './Chatbox.css';

var chatroomRef;

function Chatbox() {
    const [text, setText] = useState('');
    const [lines, setLines] = useState([]);
    const [name, setName] = useState('');
    const [chatroom, setChatroom] = useState('chatroom-1');

    useEffect(() => {
        setLines([]);
        chatroomRef = firebase.database().ref(chatroom);
        chatroomRef.on('child_added', snapshot => {
            let x = snapshot.val();
            setLines(line => [...line,
            {
                sender: x.sender,
                message: x.message,
                timestamp: new Date(x.timestamp),
            }]);
        })

        return () => {
            chatroomRef.off('child_added');
        };

    }, [chatroom]);

    const onSend = () => {
        if (text.length < 1) return;
        if (name.length < 1) {
            alert("Please set your displayname");
            return;
        }

        chatroomRef.push({
            sender: name,
            message: text,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
        });
        setText("");
    };

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onKeyPress = (event) => {
        if (event.which === 13) {
            onSend();
        }
    }

    const onNameChange = (event) => {
        event.preventDefault();
        const input = document.getElementById('fname');
        input.classList.toggle('name-show');
        if (input.className === 'name-input') {
            setName(input.value);
            document.getElementById('fsubmit').value = name;
        } else {
            document.getElementById('fsubmit').value = 'Done';
        }
    }

    const ChangeName = () => {
        const displayName = name.length > 0 ? name : "Change Name";
        return (
            <div>
                <form id='displayname' className='displayname-settings' onSubmit={onNameChange}>
                    <input className='name-input' id='fname' placeholder='Displayname...' type='text' />
                    <input className='name-submit' type="submit" id='fsubmit' value={displayName} />
                </form>
            </div>
        );
    }

    const ChatroomButton = (props) => {
        return (
            <button className='chatroom-button' onClick={() => {
                setChatroom(props.chatroomId);
            }}>{props.chatroomName}</button>
        );
    }

    const ChatroomBar = () => {
        return (
            <div className='chatroom-bar'>
                <ChatroomButton
                    chatroomName='Chatroom #1'
                    chatroomId='chatroom-1' />
                <ChatroomButton
                    chatroomName='Chatroom #2'
                    chatroomId='chatroom-2' />
                <ChatroomButton
                    chatroomName='Chatroom #3'
                    chatroomId='chatroom-3' />
            </div>
        );
    }

    return (
        <App>
            <ChatroomBar />
            <ChangeName />

            <div className="App-chatroom">
                {
                    lines.map(x => {
                        return <div key={x.timestamp} className="App-chatroom-text">
                            <div className='messageBox'>
                                <div className='sender'>{x.sender}:</div>
                            </div>

                            <div className='message'>{x.message}</div>
                            <div className='time'>{x.timestamp.toLocaleString()} </div>
                        </div>
                    })*/
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
                })}
            </div>

            <div className="App-textbox">
                <input placeholder='Type something...' type="text" className="App-textbox-input" value={text} onKeyPress={onKeyPress} onChange={onTextChange} />
                <div className="App-textbox-send" onClick={onSend}>Send!</div>
            </div>
            <div>
            </div>
        </App >
    );
}

export default Chatbox;

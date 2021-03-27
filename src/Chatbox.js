import React, {useState, useEffect} from 'react';
import './ChatBox.css';
import LobbyHeader from "./LobbyHeader"
import firebase from "./firebaseConfig";

const chatroomRef = firebase.database().ref('fantasma-room-1');

function ChatBox({children}) {

    const [text, setText] = useState("");

    const [lines, setLines] = useState([]);

    // () => {} same as function() {}  --lambda notation
    useEffect(() => {
        chatroomRef.on('child_added', snapshot => {
            let x = snapshot.val();
            setLines(l => [...l, {
                sender: x.sender,
                message: x.message,
                timestamp: (new Date(x.timestamp))
            }])
        });
    }, []);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onSend = () => {
        // push to firebase sever
        chatroomRef.push({
            sender: "Me",
            message: text,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        setText("")
    }

    const keyPress = (event) => {
        if (event.which === 13) {
            onSend();
        }
    };

    return (
        <LobbyHeader>
            <div className="App col-12">
                <div className="App-chatroom">
                    {
                        lines.map(x => {
                            return <div className="App-chatroom-text">
                                {x.sender +" : "}
                                {x.message}
                                <div
                                    className="App-Time-Position">{" --- " + x.timestamp.toLocaleString() + " --- "}</div>

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

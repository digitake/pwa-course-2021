import { Link } from 'react-router-dom';
import back from './image/back.png' ; 
import './MainPage.js'
import Chatbox from './Chatbox'

function Chatroom() {
return(
    <Chatbox>
    <div>
        Chatroom
        </div>
        <Link to="MainPage">
            <image src={back}  alt="ย้อนกลับ" width="200" border="5" align="top"/>
        </Link>
    
    </Chatbox>
    )
};

export default Chatroom;
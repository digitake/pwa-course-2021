import { Link } from 'react-router-dom';
import back from './image/back.png' ; 

function Chatroom() {
return(
    <div>
        Chatroom
        <Link to="MainPage">
            <image src={back}  alt="ย้อนกลับ" width="200" border="5" align="top"/>
        </Link>
    </div>
    
    )
};

export default Chatroom;
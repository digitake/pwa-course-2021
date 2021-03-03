import { Link } from 'react-router-dom';
import img from './image/back.png';

function Chatroom() {
return(
    <div>
        Chatroom
        <Link to="/">
            <img src="back"  alt="ย้อนกลับ"/>
        </Link>
    </div>
    
    )
};

export default Chatroom;
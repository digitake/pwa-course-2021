import { Link } from 'react-router-dom';


function Chatroom() {
return(

    <div className="App-header">
    <div>
        Chatroom

        <Link to="/">
            <img src="back"  alt="ย้อนกลับ"/>
        </Link>
        
    </div>
    </div>
    )
};

export default Chatroom;
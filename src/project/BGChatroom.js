import './ProChatroom.css';
import { Link } from 'react-router-dom';


function BGChatroom ({children}) {

    return (
        <div className="header-Chatroom">
        <div className="circlesbox1">
          <Link to='/Profile'>
              <img src="/Project/Prochatroom/5.jpg" alt="/Project/Prochatroom/5.jpg" width="50px" height="50px"/>
          </Link> 
        </div>
        <div className="imp">
          <Link to='/Profriend'>
              <img src="/Project/Prochatroom/333.jpg" alt = "/Project/Prochatroom/333.jpg" width="50px" height="50px"/>
          </Link>
        </div>
        <div className="imp2">
          <img src= "/Project/Prochatroom/5555.jpg" alt ="/Project/Prochatroom/5555.jpg" width="60px" height="60px" />
        </div>
        <div className ="App-contenter">
                {children}
        </div>
      </div> 
    );
  }
  
  export default BGChatroom;
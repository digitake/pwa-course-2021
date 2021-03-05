import { Link } from 'react-router-dom';
import './Home.css';

function Home(){
    return(
        <div className="Home">
        <div className="Home-header">
        <div className="Home-header1" ></div>
        <div className="Home-header2" >
        <Link className={"Home-header2"} to="/home"/>
        </div>
        <div className="Home-header3">
        <Link className={"Home-header3"} to="/calendar"/>
        </div>  
        </div>
        <div className="Home-chats">
            <div className="Home-chats-room">
                <Link className={"Home-chats-room"} to="/"/>  
            </div>
        </div>
        <div className="Home-menu">
          <div className="Home-menu1"></div>
          <div className="Home-menu2"></div>
          <div className="Home-menu3"></div>
          <div className="Home-menu4"></div>
  
        </div>
      </div>
    );
};
export default Home;
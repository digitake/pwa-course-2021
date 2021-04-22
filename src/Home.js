import { Link } from 'react-router-dom';
import './Home.css';
import App from './App'

function Home(){
    return(
      <App>
        <div className="Home">
         <div className="Home-header">
          <div className="Home-header1" >
           <Link className={"Home-header1"} to="/profile"/>
          </div>
          <div className="Home-header2" >
           <Link className={"Home-header2"} to="/e-wallet"/>
          </div>
          <div className="Home-header3">
            <Link className={"Home-header3"} to="/calendar"/>
          </div>  
        </div>
        <div className="Home-chats">
            <div className="Home-chats-room1">
                <Link className={"Home-chats-room1"} to="/"/>
            </div>
            <div className="Home-chats-room2">
                <Link className={"Home-chats-room2"} to="/"/>
            </div>
            <div className="Home-chats-room3">
            <Link className={"Home-chats-room3"} to="/"/>
            </div>
            <div className="Home-chats-room4">
            <Link className={"Home-chats-room4"} to="/"/>
            </div>
            <div className="Home-chats-room5">
            <Link className={"Home-chats-room5"} to="/"/>
            </div>
        </div>
        <div className="Home-menu">
          <div className="Home-menu1"></div>
          <div className="Home-menu2"></div>
          <div className="Home-menu3"></div>
          <div className="Home-menu4"></div>
        </div>
      </div>
      </App>
    );
};
export default Home;
import { Link } from 'react-router-dom';
import './Home.css';
import App from './App'
import Searching from './Searching';


function Home(){
    return(
      <App>
        <div className="Home">
         <div className="Home-header">
          <div className="Home-header1" >
           <Link className={"Home-header1"} to="/home"/>
           <Searching></Searching>

          </div>
          <div className="Home-header2" >
           <Link className={"Home-header2"} to="/home"/>
          </div>
          <div className="Home-header3">
            <Link className={"Home-header3"} to="/calendar"/>
          </div>  
        </div>
        <div className="Home-chats">
            <div className="Home-chats-room1">
              <div className="Home-chats-room1-pic">
                <Link className={"Home-chats-room1-pic"} to="/chatbox"/>
              </div>
              <div className="Home-chats-room1-info">
                <div className="Home-chats-room1-name">
                  Zonefez
                </div>
                <div className="Home-chats-room1-message">
                  Hello World!
                </div>
              </div>
              <div className="Home-chats-room1-time">
                30 Mins
              </div>
            </div>
            <div className="Home-chats-room2">
                <Link className={"Home-chats-room2"} to="/chatbox"/>
            </div>
            <div className="Home-chats-room3">
            <Link className={"Home-chats-room3"} to="/chatbox"/>
            </div>
            <div className="Home-chats-room4">
            <Link className={"Home-chats-room4"} to="/chatbox"/>
            </div>
            <div className="Home-chats-room5">
            <Link className={"Home-chats-room5"} to="/chatbox"/>
            </div>
        </div>
        <div className="Home-menu">
          <div className="Home-menu1">
          <Link className={"Home-menu1"} to="/profile"/>
          </div>
          <div className="Home-menu2">
          
          </div>
          <div className="Home-menu3">
          <Link className={"Home-menu3"} to="/e-wallet"/>
          </div>
        </div>
      </div>
      </App>
    );
};
export default Home;
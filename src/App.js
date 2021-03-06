import './App.css';
import {Link} from "react-router-dom";
import Chatbox from "./Chatbox";
 
function App() {
  return (
    <div className="App col-12">
      <div className="App-header">
          <div className="profile-read-ju-on"></div>
          <div className="RoomName">
              <h1>Room Ju-on</h1>
              <h6>RID 123456</h6>
          </div>
          <Link to="/Profile_Tar">
          <div className="profile-read-tar"></div>
          </Link>
          <div className="profile-read-pruek"></div>
          <div className="profile-read-phai"></div>
          <div className="Chat-header"></div>
          </div>
        <Chatbox/>
    </div>
      
  );
}

export default App;

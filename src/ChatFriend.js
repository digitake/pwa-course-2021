import { Link } from 'react-router-dom';
import './App.css';
import AppContent from './Content'


function AllChatInterface() {

    return(
        <AppContent>
          <div className="AllChat-Header">
            <div className="Search-Box">
              Write something to search..
            </div>

          </div>

          <Link to="/chatbox-test" className="Middle-Zone">
              
              <div className = "FriendChat-Box">

                <div className = "Name-Box">
                    Ultimate Cat [Test]
                </div>

                <div className = "LastChat">
                   Ok
                </div>

                <div className = "FriendPic">              
                  <img src= "cat.png" alt = "profile.png" width="100px" height="105px"/>
                </div>
                </div>
                </Link>
         </AppContent>
    );
    
}

export default AllChatInterface;
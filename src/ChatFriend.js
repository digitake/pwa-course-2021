import './App.css';
import AppContent from './Content'


function AllChatInterface() {

    return(
        <AppContent>
        

          <div className="AllChat-Header">
            <div className="Search-Box">
             [Search Box] [Search Box] [Search Box]
            </div>

          </div>

          <div className="Middle-Zone">
              
              <div className = "FriendChat-Box">

                <div className = "Name-Box">
                    Ultimate Cat [Test]
                </div>

                <div className = "LastChat">
                   So Hungry pls back to home 
                </div>

                <div className = "FriendPic">              
                  <img src= "cat.png" alt = "profile.png" width="100px" height="105px"/>
                </div>
                </div>
            </div>

         </AppContent>
    );
    
}

export default AllChatInterface;
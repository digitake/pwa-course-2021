import './FriendList.css';
import NormalPage from './NormalPage'

function FriendList() {
    
    return (
       <div className = "FriendList">
             <div className = "FriendList-header">
             </div>
        <div className = "FriendList-chatroom">
        <div className = "FriendList-Main">
            <div>
                Friend List
                <NormalPage>
                </NormalPage>
                </div>
            </div>
        </div>
        </div>
    




    );
};

export default FriendList;
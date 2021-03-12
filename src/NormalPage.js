import './NormalPage.css';
import { Link } from 'react-router-dom';

function NormalPage({children}) {
    
    return (
       <div className = "NormalPage">
             <div className = "NormalPage-header">
             <Link to="/friend-list">
                <button>
                 Go FriendList
                </button>
             </Link>
             <Link to="/Profile">
             <button>
              Go Profile
            </button>
             </Link>
             <Link to="/App">
             <button>
              App
            </button>
             </Link>
             <Link to="/DarkChat">
             <button>
              DarkChat
            </button>
             </Link>
         </div>
        <div className = "NormalPage-chatroom">
        <div className = "NormalPage-Main">
            {children}
        </div>
        </div>
        </div>




    );
};

export default NormalPage;
import './Profile.css';
import { Link } from 'react-router-dom'
function Profile(){
    return (
        <div className = "Profile">
          
          <div className="Profile-header">
    
          <div>
                Profile
                <Link to = "/">
                    <button>
                        Go to Chatroom
                    </button>
                </Link>
            </div>
            
            <div className="Profile-name">
    
              GI472 Pheeraphat Chocokviriyapanya
            </div>

            <div className="Profile-picture">
    
            </div>

            </div>
        </div>

              
              );
            };
    export default Profile
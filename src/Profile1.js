import { Link } from 'react-router-dom';
import App from './App';
import './Profile1.css';
import profile from './profile.png'

function Profile1(params) {
    return(
        <App>
        <div className = "Profile">
            <div className = "Profilemid">
                <img src = {profile} alt ="" width = "300px" height ="300px"></img>
                <div className = "Profilename">
                    USERNAME : Natchapol
                </div>
                <div className = "Profileinfo">
                    หาเพื่อนเที่ยวฟิวเจอร์พาร์ครังสิต 10.00น
                    
                </div>

            </div>
            

            
            
        </div>
        </App>
    )
}

export default Profile1;
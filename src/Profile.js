import { Link } from 'react-router-dom'
import ProfileName from './Benz.jpg';
function Profile(){
    return (
        <div className = "Profile">

        <div className="Profile-header">
           <div className="btn-cover">
           <Link to = "/" style={{  textDecoration: "none" }}>
                <div className="btn-back">
                    Back
                </div>
            </Link>
            </div> 
            <div>
            My Profile
            </div>
         </div>

         <div className= "Profile-content">
             <br/>
             <a href="https://www.facebook.com/peerapat.chokwiriyapanya/" target="_blank">
         <img src= {ProfileName} width = "150" height = "150" alt="รูปคนหล่อ" style={{borderRadius: "50%"}}/>
         </a>
         <br/>
            <div>
                My name is benzchk 20 years old 
            </div>

            <div>
            studying at Bangkok University 
            </div>

            <div>
            Faculty of Information Technology and Innovation
            </div>

            <div>
            Major is Game and Interactive Media, 2nd year
            </div>
         </div>
    </div>
              );
            };
    export default Profile

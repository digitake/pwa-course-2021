import './Profile.css';
/*import {useState} from 'react';*/
import { Link } from 'react-router-dom'
import ProfileName from './Profile.png';
function Profile(){
    return (
        <div className = "Profile">

        <div className="Profile-header">
           <div>
           <Link to = "/">
                <button>
                    back
                </button>
            </Link>
               My Profile
            
            </div> 
         </div>

         <div className= "Profile-content">
         <img src= {ProfileName} width = "150" height = "150" alt="รูปคนหล่อ"/>
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

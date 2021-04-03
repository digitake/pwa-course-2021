import './Profiles.css';
import {GrFacebook , GrGithub ,GrTwitter} from "react-icons/gr";
import {CgProfile, CgInstagram} from "react-icons/cg";
import { Link } from 'react-router-dom';

function profiles() {
    return (
        
    <div className = "App-column">
        
            <div className = "Profile-Titles">
                Profile
            </div>
            <div className = "Undo2">
                <Link to = "/SettingPage">
                    <img src = "Union(1).png" alt = "" />
                </Link>
            </div>
            <div className = "Profile" >
                    <CgProfile/>
                    <div classname = "Info-Profile">Profile </div>
                
            </div>


        <div className = "Info">
                

                <div className = "Info-IconLogo" >

                    <div className = "Facebook"><GrFacebook /></div>
                
                    <div className = "Instagram"><CgInstagram/></div>    
                 
                    <div className = "Github"> <GrGithub/></div>          
                
                    <div className = "Twitter"> <GrTwitter/></div>

                </div>
                
                <div className = "Info-IconLogo-text">

                    <div className = "Info-Facebook">Thanaporn Tungyen </div> 

                    
                    <div className = "Info-Instagram">I LOVE FACEBOOK BETTER!</div>

                   

                    <div className = "Info-Github"> https://github.com/Barrower990/pwa-course-2021 </div>
                    
     

                   

                    <div className = "Info-Twitter"> Twitter is take over by flametwit </div>

                </div>

                
        </div>
        
     </div>
        
    );
}

export default profiles;
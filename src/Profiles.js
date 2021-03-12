import './Profiles.css';
import {GrFacebook , GrGithub ,GrTwitter} from "react-icons/gr";
import {CgProfile, CgInstagram} from "react-icons/cg";
import { Link } from 'react-router-dom';

function profiles() {
    return (
    <div className="Header">
            <div className = "Profile-Titles">
                Profile
            </div>

        <div className = "Info">

                <div className = "Profile" >
                    <CgProfile/>
                    <div classname = "InfoProfile">
                        Profile
                    </div>
                </div>

                <div className = "Facebook">
                    <GrFacebook />
                    <div className = "InfoFacebook">
                        Thanaporn Tungyen
                    </div>
                </div>
            
                <div className = "Instagram">
                    <CgInstagram/>
                    <div className = "InfoInstagram">
                        I LOVE FACEBOOK BETTER!
                    </div>
                </div>

                <div className = "Github">
                    <GrGithub/>
                    <div className = "InfoGithub">
                    https://github.com/Barrower990/pwa-course-2021
                    </div>
                </div>

                <div className = "Twitter">
                    <GrTwitter/>
                        <div classname = "InfoTwitter">
                            Twitter is take over by flametwit
                        </div>
                </div>
            </div>
        </div>
        
    );
}

export default profiles;
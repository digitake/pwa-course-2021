import './Friend.css';
import Profile from './Profile';
import { Link } from "react-router-dom";

function Friend(){
    return(
    <Profile>

       <div className="Friend">  
        <image> 
        <img src ="mango-64.png"/>
        </image> 
        Alfie Leafi
       </div>

       <div className="Friend"> 
        <image> 
        <img src ="mango-64.png"/>
        </image>  
        Best Assadawut
       </div>

       <div className="Friend">  
        <image> 
        <img src ="mango-64.png"/>
        </image> 
        Khanin Jittapan
       </div>

       <div className="Friend"> 
        <image> 
        <img src ="mango-64.png"/>
        </image>  
        Napasin Chongsanguan
       </div>

       <div className="Friend">
        <image> 
        <img src ="mango-64.png"/>
        </image>   
        Noraphat Thodsadee
       </div>

    </Profile>
    );
};

export default Friend;
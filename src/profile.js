import './App.css';
import { Link } from 'react-router-dom';


function MainProfile() {

    return(
       
        <div className ="App">

            <div className = "profilehead">

            </div>
            <div className = "profilemid">
                <div className ="framepic">
                <Link to="/" className="profilepic">
                    <img src= "armprofile.jpg" alt = "plus.png" width="190px" height="190px"/> 
                </Link>
                
                </div>
                <div className = "profilename">
                    [Arm NAJA]
                </div>

                <div className ="profileinfo">
                    
                    ผมชอบแมวมากเลยครับ
                    <p>แล้วผมก็ขายอาหารงูด้วย</p>
                    <p>และผมก็ชอบหมาของขนุน</p>
                   
                </div>

                <div className = "profilespinhis">
                    [Spin History]
                </div>

            </div>

          

            <div className ="image-button">

                        
                     <Link to="/" className="image-between">
                    <img src= "profile.png" alt = "profile.png" width="100px" height="100px"/> 
                </Link>

                <Link to="/AllChat" className="image-between">
                    <img src= "friend list.png" alt = "profile.png" width="100px" height="100px"/> 
                </Link>

                <Link to="/" className="image-between">
                    <img src= "dice.png" alt = "profile.png" width="100px" height="100px"/> 
                </Link>

                <Link to="/" className="image-between">
                    <img src= "list.png" alt = "profile.png" width="100px" height="100px"/> 
                </Link>

                    </div>

        </div>

    
        

    );
    

}

export default MainProfile;
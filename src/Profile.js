import './App.css';
import { Link } from 'react-router-dom';
import Content from './Content'

function MainProfile() {

    return(
       <Content>
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
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                </div>

                <div className ="profileinfo">
                    
                <textarea>Edit...</textarea>
                </div>

                <div className = "profilespinhis">
                    [Spin History]
                </div>
            </div>
        </div>
 
        </Content>
    );
}

export default MainProfile;
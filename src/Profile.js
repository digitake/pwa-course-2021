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
        </div>
 
        </Content>
    );
}

export default MainProfile;
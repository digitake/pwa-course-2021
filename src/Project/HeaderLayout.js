import './Layout.css';
import { Link } from 'react-router-dom';


function HeaderLayout({children}) {

    return (
        <div className="Headprofile">
            <div className="Settingbutton">  
                <Link to='/Prosetting'>
                <img src="/Project/ProFriend/3Line.png" alt="/Project/ProFriend/3Line.png" width="50px" height="50px"/>         
                </Link>
            </div>
            <div className ="App-contenter">
                {children}
            </div>
        </div>
        
        
    );
  }
  
  export default HeaderLayout;
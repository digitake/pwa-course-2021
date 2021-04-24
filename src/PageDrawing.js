import { Link } from 'react-router-dom';
import './PageDrawing.css';
import drawing from './Drawing_Icon.png';
import Logo from './Logo.png'
import ChatLogo from './Cahat_Icon.png'
import Toolicon from './ToolIcon.png'

function Page4Drawling() {
  return (
    <div className="PageDrawing">
      <div className="PageDrawing-header">
        <img src={Logo}></img>
          D r a w z y
          <img src={Logo}></img>
        <div className="PageDrawing-botton">
          <Link to="/App">
          <img src={ChatLogo}></img>
          </Link>
          <div></div>
        </div>
      </div>
      <div className="PageDrawing-drawbox">
        <div className="PageDrawing-Icon">
        <img src={Toolicon}></img>
        </div>
      </div>
      <div className="PageDrawing-send">
        Send
      </div>

    </div>
  )
};

export default Page4Drawling;
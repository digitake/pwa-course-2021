import { Link } from 'react-router-dom';
import './PageDrawing.css';
import drawing from './Drawing_Icon.png';
import Logo from './Logo.png'
import ChatLogo from './Cahat_Icon.png'

function Page4Drawling() {
  return (
    <div className="PageDrawing">
      <div className="PageDrawing-header">
        <img src={Logo}></img>
          Page Drawing
        <div className="PageDrawing-botton">
          <Link to="/App">
          <img src={ChatLogo}></img>
          </Link>
          <div></div>
        </div>
      </div>
      <div className="PageDrawing-drawbox">
        <div className="PageDrawing-Icon">
          <img src={drawing} />
        </div>
      </div>
      <div className="PageDrawing-send">
        Send
      </div>

    </div>
  )
};

export default Page4Drawling;
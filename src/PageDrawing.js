import { Link } from 'react-router-dom';
import './PageDrawing.css';
import drawing from './Drawing_Icon.png';

function Page4Drawling() {
  return (
    <div className="PageDrawing">
      <div className="PageDrawing-header">
        Page Drawing
        <div className="PageDrawing-botton">
          <Link to="/App">
            <button>Go to Chatroom</button>
          </Link>
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
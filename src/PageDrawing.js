import { Link } from 'react-router-dom';
import './PageDrawing.css';

function Page4Drawling() {
  return (
    <div className="PageDrawing">
      <div className="PageDrawing-header">
        Page Drawing
        <div className="PageDrawing-botton">
          <Link to="/Chatroom">
            <botton>Go to Chatroom</botton>
          </Link>
        </div>
      </div>
      <div className="PageDrawing-drawbox"></div>
      <div className="PageDrawing-send">
        Send
      </div>
      
    </div>
  )
};

export default Page4Drawling;
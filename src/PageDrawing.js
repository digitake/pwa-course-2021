import {Link} from 'react-router-dom';
import './PageDrawing.css';

function Page4Drawling() {
    return(
    <div className="PageDrawing">
            <div className="PageDrawing-header">
            </div>
            <div className="PageDrawing-chatroom">
        <Link to ="/">
          <botton>
            Go to Chatroom
          </botton>
        </Link>
      </div>
      <div className="PageDrawing-textbox">
        <div className="PageDrawing-textbox-send" >Send!
        </div>
        </div>
    </div>
        
    )
};

export default Page4Drawling;
import './group.css';
import { Link } from 'react-router-dom'
function GroupApp(){
    return(
        <div className="Group">
      
        <div className="Group-header">
        Group
        <div className = "Group-content"> 
        <div>
            
            <Link to = "/">
                <button>
                    go back
                </button>
            </Link>
        </div>
         </div>
        </div>
        </div>
    );
}

export default GroupApp
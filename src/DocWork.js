import './App.css';
import{Link} from 'react-router-dom'
function  DocWork() {
    return(
        <div>
            Document-Work
          <Link to="/">
            <button>
             Go to Friend-List
             </button>
            </Link>
        </div>
    )
};
export default DocWork;
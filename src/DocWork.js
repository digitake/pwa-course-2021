import './App.css';
import{Link} from 'react-router-dom'
function  DocWork() {
    return(
        <div>
            Document-Work
          <Link to="/cradit">
            <button>
             Go to Cradit-List
             </button>
            </Link>
        </div>
    )
};
export default DocWork;
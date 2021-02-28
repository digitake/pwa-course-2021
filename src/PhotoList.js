import './App.css';
import{Link} from 'react-router-dom'
function  PhotoList() {
    return(
      <div>
          Photo List
          <Link to="/friend-list">
            <button>
             Go to Friend-List
             </button>
            </Link>
        </div>
    )
};

export default PhotoList;
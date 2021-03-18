import '/.App.css';
import {Link} from 'react-router-dom'
import Chatbox from './Chatbox';

function App() {
    return(
        <div className="App">
            <div className="App-header">
            <Link to="/friend-list">
                <button>
                    Go to Friend List
                    </button>
                    </Link>             
        </div>
        <Chatbox />
        </div>

    );
}

export default App;
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import App from './App';

function FriendList() {
    return(
        <App>
        <div>
            <div>Friend List</div>
            <Link to="/">        
                Go back         
        </Link>
        </div>
        </App>    
    )
=======
import LinkTo from './Components/LinkManager'
import App from './App';

function FriendList() {
    return (
        <App>

            <div>
                <h1>FriendList</h1>
                <LinkTo value="Go Back!" to="/app" />
            </div>

        </App>

    );
>>>>>>> b49edfa271afdd785d6876546f642c3293919999
}

export default FriendList;
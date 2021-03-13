import { Link } from 'react-router-dom';
import App from './App';

function FriendList() {
    return(
        <App>
            <h1>Add friend</h1>
            <p class="solid">Search by iD / Phone</p>
            <input type="text" placeholder="Search.." name="search2"></input>
            <select id="country" name="country">
                <option value="au">ID</option>
                <option value="ca">Phone No</option>
            </select>
            <img width="200" height="200"></img>
        </App>
    )
    
}


export default FriendList;
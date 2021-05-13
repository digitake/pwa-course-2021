import App from './App';
import { Link } from 'react-router-dom';


function AddFriend(){
    return(
        <App>
                        <h1>Add friend</h1>
            <p class="solid">Search by ID / Phone</p>
            <input type="text" placeholder="Search.." name="search2"></input>
            <select id="country" name="country">
                <option value="au">ID</option>
                <option value="ca">Phone No</option>
            </select>
            <p></p>
            <img src="เณรเชน.jpg" width= "200" height="200"/>
            <p></p>
            <b>เณรเชน วัดหน่องประดู่</b>
        </App>

    )
}





export default AddFriend;
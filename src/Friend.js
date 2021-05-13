import App from './App';
import './Friend.css';
import { Link } from 'react-router-dom';

function Friend(){
    return(

        <App>
            <h2>My Friend</h2>

            <p></p>

        <img src="hi.jpg" width="100" height="100" align= "middle" /> <b>tana</b>
        <hr></hr>
        <p></p>
        <img src="https://cdn.discordapp.com/attachments/643322471247904775/840998300291039242/hi.jpg" width="100" height="100" alt= "Maincoon" align= "middle"/> <b>tana</b><hr></hr>
        <div>
            <Link to="addfriend">
                <p>
                <img src="add.png" width="70" />
            </p>
            </Link>
            </div>

       
        </App>
    
    
    )
}

export default Friend;
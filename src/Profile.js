import App from './App';
import pro from './123.jpg';
import { Link } from 'react-router-dom';

function  Profile() {

    return(
        <div className="App-header">
        <App>
        <div class="center">
        <body>
        <img src={pro}  width="350" height="350"/>
                <p align="center">
                    <h1>
                    Name
                    </h1>
                    <h1>
                    ID ********
                    </h1>
                </p>
            </body>
        </div>
        </App>
        </div>
    )
    
}

export default Profile;
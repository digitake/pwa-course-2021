import App from './App';
import pro from './123.jpg';

function  Profile() {

    return(
        <App>
        <div class="center">
        <body>
        <img src={pro}  />
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
    )
    
}

export default Profile;
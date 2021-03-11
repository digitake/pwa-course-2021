import App from './App';
import pro from './123.jpg';

function  Profile() {

    return(
        <App>
            <div>
                <body>
                    <center><img src={pro} width="200" border="5" align="top" /></center>
                        <p align="center">
                        <h1>Name</h1>
                        <h1>ID ********</h1>
                    </p>
                </body>
            </div>
        </App>   
    )   
}

export default Profile;
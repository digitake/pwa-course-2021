import { Link } from 'react-router-dom';
import inProfile from "./desgin/InsepectProfile.jpg";
import App from './App';

function InsepectProfile(){
    return(
        <App>
        <div align="center">
            <h1>Insepect Profile</h1>
            <img src={inProfile}></img>
        </div>
        </App>
    )
};

export default InsepectProfile;
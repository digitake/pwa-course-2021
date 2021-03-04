import { Link } from 'react-router-dom';
import inProfile from "./design/InsepectProfile.jpg";

function InsepectProfile() {
    return (
        <div align="center">
            <Link to="/home">
                <img src={inProfile} width="480" height="852"></img>
            </Link>
        </div>
    )
};

export default InsepectProfile;
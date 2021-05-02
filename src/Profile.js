import { Link } from 'react-router-dom'
import ProfileName from './Benz.jpg';
function Profile() {
    return (
        <div className="Profile">

            <div className="Profile-header">
                <div className="btn-cover">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="btn-back">
                            Back
                </div>
                    </Link>
                </div>
                <div>
                    My Profile
            </div>
            </div>

            <div className="Profile-content">
                <div style={{ backgroundColor: "#eee", padding: "10px", borderRadius: "5px", marginTop: "1rem", boxShadow: "0 5px 5px #111" }}>
                    <a href="https://www.facebook.com/peerapat.chokwiriyapanya/" target="_blank" rel="noreferrer">
                        <img src={ProfileName} width="150" height="150" alt="รูปคนหล่อ" style={{ borderRadius: "50%", margin: "1rem 0 1rem 0" }} />
                    </a>
                    <p>About Me!</p>
                    <div style={{ backgroundColor: "#ddd", padding: "10px", borderRadius: "5px", marginTop: "1rem" }}>
                        <p>
                            My name is benzchk 20 years old
                    </p>
                        <p>
                        </p>
                        <p>
                            Faculty of Information Technology and Innovation
                    </p>
                        <p>
                            Major is Game and Interactive Media, 2nd year
                    </p>
                    </div>
                    <p>Contact Me!</p>
                    <div>
                        <a className="btn-facebook" href="https://www.facebook.com/peerapat.chokwiriyapanya/" target="_blank" rel="noreferrer">
                            Fackbook!
                        </a>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};
export default Profile

import {Link} from 'react-router-dom';
import login from './Design/Log in.jpg'

function Login() {
  return (
    <div align="center">
      <h1>Log In</h1>
        <Link to="/">
        <img src={login} width="480" height="852">
            </img>
        </Link>
        <body align = "center">
            Click image to continue
        </body>
    </div>
    )
};

export default Login;
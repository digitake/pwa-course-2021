import {Link} from 'react-router-dom';
import register from './Design/Register.jpg'

function Register() {
  return (
    <div align="center">
      <h1>Register</h1>
        <Link to="/Login">
        <img src={register} width="480" height="852">
            </img>
        </Link>
        <body align = "center">
            Click image to continue
        </body>
    </div>
    )
};

export default Register;
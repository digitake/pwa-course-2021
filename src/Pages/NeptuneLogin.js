import { Component } from 'react';
import '../Neptune/Neptune.css';
import LogoPng from '../Neptune/Logo.png';

import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <img src={LogoPng} alt='No Img' />
        </div>
    );
}

function Login() {

    return (
        <div >
            <form>
                Username or email
                <input type='text' placeholder='Your username' />
                Password
                <input type='text' placeholder='Your password' />
                <Link to='/pin'>
                    <button className='button'>Log in</button>
                </Link>
                <a>Or</a>
                <Link to='/register'>
                    <button className='button'>Register</button>
                </Link>
            </form>
        </div>
    );
}


class NeptuneLogin extends Component {
    render() {
        return (
            <div className='loginForm'>
                <Logo />
                <Login />
            </div>
        );
    }
}

export default NeptuneLogin;
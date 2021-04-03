import { Component } from 'react';
import LogoPng from '../design/Logo.png';

import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <img src={LogoPng} alt='No Img' />
        </div>
    );
}

function Login(params) {

    return (
        <div >
            <form>
                Please enter your personal info
                <input type='text' placeholder='Enter username' />
                <input type='text' placeholder='Enter your email' />
                <input type='text' placeholder='Enter your phone number' />
                <input type='password' placeholder='Enter your password' />
                <input type='password' placeholder='Re-enter your password' />
                <label>I accept the terms of the agreement
                    <input
                        className='loginCheckbox'
                        type='checkbox' value='tt'></input>
                </label>

                <Link to='/login'>
                    <button className='button'>Sign up</button>
                </Link>
            </form>
        </div>
    );
}


class NeptuneRegister extends Component {
    render() {
        return (
            <div className='loginForm'>
                <Logo />
                <Login />
            </div>
        );
    }
}

export default NeptuneRegister;
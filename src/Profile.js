import './Profile.css';
import {useState} from 'react';
import { Link } from 'react-router-dom'
import App from './App';
function Profile(){
    return (
        <App>
           <div>
               My Profile
            <Link to = "/chatbox">
                <button>
                    Go to Chatroom
                </button>
            </Link>
            </div> 
        </App>
              
              );
            };
    export default Profile
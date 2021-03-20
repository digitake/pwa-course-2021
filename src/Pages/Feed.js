import { Component } from 'react';
import '../CSS/Feed.css';
import App from '../App';
import AvatarImg from '../img/img_avatar.png';
import AvatarElonImg from '../img/img_elonmusk.png';

function Box({ children }) {
    return (
        <a className='box'>
            {children}
        </a>
    );
}

function Avatar(props) {
    return (
        <img className='avatar' src={props.img} alt='avatar' />
    );
}

function ProfileInfo(props) {
    return (
        <div className='infoBox'>
            <a className='displayName'>{props.name}</a>
            <div>
                <a className='id'>@{props.id}</a>
                <a className="dot">•</a>
                <a className='date'>{props.date}</a>
            </div>
        </div>
    );
}


function Post(props) {
    return (
        <a className='post'>{props.text}</a>
    );
}


function Comment(props) {
    return (
        <a className='comment'>{props.text}</a>
    );
}

function Delete(props) {
    return (
        <a className='delete'> •••</a>
    );
}

class Feed extends Component {
    render() {
        return (
            <App>

                <div className='container'>
                    <Box>
                        <Avatar img={AvatarElonImg} />
                        <ProfileInfo
                            name='Elon Musk'
                            id='real.elon'
                            date='2 days ago' />
                        <Delete />
                        <Post text='
                      " People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working. "' />
                        <Comment text='5,023 Comments' />
                    </Box>

                    <Box>
                        <Avatar img={AvatarImg} />
                        <ProfileInfo
                            name='Custom Name'
                            id='UserID'
                            date='2 weeks ago' />
                        <Delete />
                        <Post text='
                      Just take my hand, lead, dance with me...and I will simply follow the blueness of the water, the white waves rolling free...where the earth beneath my feet and stars make my heart whole again...in long and priceless moments of shared solitude...
                        ' />
                        <Comment text='3 Comments' />
                    </Box>

                </div>
            </App>

        );
    }
}

export default Feed;
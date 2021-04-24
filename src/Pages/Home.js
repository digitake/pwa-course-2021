import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import App from '../App';
import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import AvatarImg from '../img/img_avatar.png';


const Header = () => {
    return (
        <div className='header-container'>
            <div>
            </div>
            <div className='home-profile'>
                <div className='name'>
                    <a>Very Good</a>
                    <a>@good.cat</a>
                </div>
                <img className='avatar' src={AvatarImg} alt='avatar' />
                <a className='profile-notify'>2</a>
            </div>
        </div>
    );
}

const iconData = [
    {
        link: "feed",
        icon: "/feed.png",
    },
    {
        link: "chat",
        icon: "/chat.png",
    },
    {
        link: "friend-list",
        icon: "/friends.png",
    },
    {
        link: "profile",
        icon: "/profile.png",
    },
];

const AppHome = () => {

    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
    }));

    const clamp = (value, clampAt = 30) => {
        if (value > 0) {
            return value > clampAt ? clampAt : value;
        } else {
            return value < -clampAt ? -clampAt : value;
        }
    };

    const bind = useScroll(event => {
        set({
            transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0
                }deg)`
        });
    });

    return (
        <div className='planet-container'>
            <div className="card-container" {...bind()}>
                {iconData.map(data => (
                    <Link to={data.link}>
                        <animated.div
                            key={data.link}
                            className="card"
                            style={{
                                ...style,
                                backgroundImage: `url(${data.icon})`
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

function Home() {
    return (
        <App>
            <div className='home-container'>
                <Header />
                <AppHome />
            </div>
        </App>

    );
}

export default Home;

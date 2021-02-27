import './Feed.css';
import { Component } from 'react';
import FeedImg from './Design/Feed.jpg';
import { Link } from 'react-router-dom';

class Feed extends Component {
    render() {
        return (
            <Link to="/">
                <div className='Feed'>
                    <img src={FeedImg} />
                </div>
            </Link>

        );
    }
}

export default Feed;
import { Component } from 'react';
import '../CSS/Feed.css';
import FeedImg from '../design/Feed.jpg';
import App from '../App';

class Feed extends Component {
    render() {
        return (
            <App>
                <div className='feed-content' >
                    <img src={FeedImg} />
                </div>
            </App>

        );
    }
}

export default Feed;
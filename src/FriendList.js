import App from './App';
import './FriendList.css';
import { Component } from 'react';
import FriendImg1 from './img/friend_1.png';
import FriendImg2 from './img/friend_2.png';
import FriendImg3 from './img/friend_3.png';
import FriendImg4 from './img/friend_4.png';
import FriendImg5 from './img/friend_5.png';
import FriendImg6 from './img/friend_6.png';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.header}</h2>
                <div className='friendList'>
                    {this.props.peopleData.map(data => {
                        return (
                            <div className='element' key={data.name}>
                                <img className='avatar' src={data.avatar} alt='' />
                                <div className='friend-name'>{data.name}</div>
                                <div className='friend-option'>

                                    {this.props.accept &&
                                        <button className='button-accept'
                                            onClick={this.props.acceptClick}>✔</button>}

                                    {this.props.decline &&
                                        <button className=' button-decline'
                                            onClick={this.props.declineClick}>✘</button>}

                                    {this.props.block &&
                                        <button className='button-block'
                                            onClick={this.props.blockClick}>#</button>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}


function FriendList() {
    return (
        <App>
            <div className='friend-container'>
                <Section header='Requests'
                    accept={true}
                    decline={true}
                    block={true}
                    acceptClick={() => { alert('YOU ACCEPTED FRIEND REQUEST') }}
                    declineClick={() => { alert('YOU DECLINED FRIEND REQUEST') }}
                    blockClick={() => { alert('YOU BLOCKED THIS PERSON') }}
                    peopleData={RequestList()}
                />

                <Section header='Friends'
                    accept={false}
                    decline={true}
                    block={true}
                    declineClick={() => { alert('YOU REMOVED THIS PERSON FROM FRIEND LIST') }}
                    blockClick={() => { alert('YOU BLOCKED THIS PERSON') }}
                    peopleData={MyFriendList()}
                />

                <Section header='Blocks'
                    accept={false}
                    decline={false}
                    block={true}
                    blockClick={() => { alert('YOU UNBLOCKED THIS PERSON!') }}
                    peopleData={BlockList()}
                />
            </div>

        </App>

    );
}

function RequestList() {
    return [
        {
            name: 'น้องกิฟท์',
            avatar: FriendImg1,
        },
        {
            name: 'เชอร์รี่',
            avatar: FriendImg2,
        },
    ];
}

function MyFriendList() {
    return [
        {
            name: 'น้องวาย',
            avatar: FriendImg3,
        },
        {
            name: 'มีตั้งมากหลาย',
            avatar: FriendImg4,
        },
        {
            name: 'ไม่ยอมเรียกกัน',
            avatar: FriendImg5,
        },
    ];
}

function BlockList() {
    return [
        {
            name: 'Fish Stop',
            avatar: FriendImg6,
        },
    ];
}

export default FriendList;
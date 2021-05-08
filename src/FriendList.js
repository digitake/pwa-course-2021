import App from './App';
import './FriendList.css';
import { Component } from 'react';

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
            avatar: '/friend_1.png',
        },
        {
            name: 'เชอร์รี่',
            avatar: '/friend_2.png',
        },
    ];
}

function MyFriendList() {
    return [
        {
            name: 'น้องวาย',
            avatar: '/friend_3.png',
        },
        {
            name: 'มีตั้งมากหลาย',
            avatar: '/friend_4.png',
        },
        {
            name: 'ไม่ยอมเรียกกัน',
            avatar: '/friend_5.png',
        },
    ];
}

function BlockList() {
    return [
        {
            name: 'Fish Stop',
            avatar: '/friend_6.png',
        },
    ];
}

export default FriendList;
import{Link} from 'react-router-dom';
import './App.css';
import Groupchat1 from './Groupchat1.png';
import HeadOfList from './HeadOfList';

function GroupList() {
    return(
<HeadOfList>
<div>
<div className="App-head-grouplist">
Group1

<div className="App-PapFriendList-body">

<Link to="/group-chat">
   <img src={Groupchat1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
Group2

<div className="App-PapFriendList-body">

<Link to="/group-chat">
   <img src={Groupchat1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
Group3

<div className="App-PapFriendList-body">

<Link to="/group-chat">
   <img src={Groupchat1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
Group4

<div className="App-PapFriendList-body">

<Link to="/group-chat">
   <img src={Groupchat1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
Group5

<div className="App-PapFriendList-body">

<Link to="/group-chat">
   <img src={Groupchat1}/>
              </Link>
   </div>
   </div>

 
   </div>
   </HeadOfList>
      );

   
}
export default GroupList;
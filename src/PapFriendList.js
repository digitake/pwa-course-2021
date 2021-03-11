import{Link} from 'react-router-dom';
import './App.css';
import Friend1 from './Friend1.png';
function PapFriendList() {
    return(

<div>
<div className="App-head-grouplist">
Friend1

<div className="App-PapFriendList-body">

<Link to="/chat-friend">
   <img src={Friend1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
   Friend2

<div className="App-PapFriendList-body">

<Link to="/chat-friend">
   <img src={Friend1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
   Friend3

<div className="App-PapFriendList-body">

<Link to="/chat-friend">
   <img src={Friend1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
   Friend4

<div className="App-PapFriendList-body">

<Link to="/chat-friend">
   <img src={Friend1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
   Friend5

<div className="App-PapFriendList-body">

<Link to="/chat-friend">
   <img src={Friend1}/>
              </Link>
   </div>
   </div>

   <div className="App-head-grouplist">
   Friend6

<div className="App-PapFriendList-body">

<Link to="/chat-friend">
   <img src={Friend1}/>
              </Link>
   </div>
   </div>
   </div>
   )
   
}
export default PapFriendList;
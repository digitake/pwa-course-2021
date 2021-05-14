import{Link} from 'react-router-dom';
import './App.css';
import Mogu from './Mogu.png';
import Friend from './Friend.PNG';
import Group from './Group.PNG';
import Store from './Store.PNG';
import IconProfile from './IconProfile.jpg';

function Home() {
    return(

        <div className="App">


         <div className="App-header-home">
         Home 

     </div>
<div className="App-test">

</div>
<div className="App-middle-home">

<div className="App-pic-home" > 
               <Link to="/profile" >
               <img src={IconProfile}/>
               </Link> 
               <div className="App-text-left">
                Profile

            </div>
            <div>

            </div>

<div className="App-pic-home" > 
               <Link to="/pap-friendList" >
               <img src={Friend}/>
               </Link> 
               <div className="App-text-left">
                Friend

            </div>

            </div> 
            <div className="App-pic-home" > 
            <Link to="/group-List" >
               <img src={Group}/>
               </Link> 
               <div className="App-text-left">
                Group Chat

                </div>
            </div>

 

<div className="App-pic-home" >

                <Link to="/Store" >
               <img src={Store}/>
               </Link> 
               <div className="App-text-left">
                Store
            </div>
            </div>

                </div> 
    </div>

     </div>

    )

}
export default Home;
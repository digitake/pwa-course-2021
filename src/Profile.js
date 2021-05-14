import HeadOfApp from './HeadOfList';
import './App.css';
import ProfilePic1 from './ProfilePic1.jpg';

function Profile()
{return(
<HeadOfApp>

<div className="App">

       
         
    
    <div className="App-middle-home-profile">
    <div className="App-test"></div>
           <div className="App-pic-left" > 
           
              <img src={ProfilePic1}/>
              
              <div className="App-text-left">
              Adam Johnson
           </div>
               </div>
           </div> 
           </div> 
</HeadOfApp>
)
};
export default Profile;
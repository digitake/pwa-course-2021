import{Link} from 'react-router-dom';
import './App.css';
import sticker1 from './stickerA.png';
import sticker2 from './stickerB.png';
import sticker3 from './stickerC.png';
import sticker4 from './stickerD.png';
import HeadOfList from './HeadOfList';


function Store() {
    return(
        <HeadOfList>
        <div className="App">




<div className="App-middle-home">


           <div className="App-test"></div>
           <div className="App-pic-left" > 
           <Link to="/buyshop" >
              <img src={sticker1}/>
              </Link> 
              <div className="App-text-left">
              Sticker1 = 10$
           
               </div>
           </div>  
               

           <div className="App-test"></div>
<div className="App-pic-left" >  

               <Link to="/buyshop" >
              <img src={sticker2}/>
              </Link> 
              <div className="App-text-left">
              Sticker2 = 10$

           </div>


               </div> 

               <div className="App-test"></div>
<div className="App-pic-left" >  

               <Link to="/buyshop" >
              <img src={sticker3}/>
              </Link> 
              <div className="App-text-left">
               Sticker3 = 10$
           </div>


               </div> 
               <div className="App-test"></div>
<div className="App-pic-left" >  

               <Link to="/buyshop" >
              <img src={sticker4}/>
              </Link> 
              <div className="App-text-left">
              Sticker4 = 10$
           </div>


               </div> 
               
   </div>

    </div>
    </HeadOfList>
   );

}
export default Store;
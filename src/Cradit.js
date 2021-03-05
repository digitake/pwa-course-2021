import './App.css';
import './Cradit.css';
import './Photo.css';
import{Link} from 'react-router-dom'
function  Cradit() {
    return(
      <div className="BG" >
        <div className="Position">
        <div className="Fist-Text">
          :  Cradit  :
        </div>
        <div className="Position2"> <Link to="/">
           <button>
            <img src="Home.png" alt="Go home" width="30" height="30"></img>
            <div>Go Home</div>
             </button>
            </Link></div>
           
            <div className="Fist-Text">
           Photo Cradit
         </div>
         <div className="Text-incradit"><a href="https://www.flaticon.com/download/icon/landing/455691?format=png&size=512"><div className= "CRADIS">Photo_Cradit_1</div></a></div>
         <div className="Text-incradit"><a href="https://www.flaticon.com/download/icon/landing/546391?format=png&size=512"><div className= "CRADIS">Photo_Cradit_2</div></a></div>         
         <div className="Text-incradit"><a href="https://www.flaticon.com/download/icon/landing/44289?format=png&size=512"><div className= "CRADIS">Photo_Cradit_3</div></a></div>         
         <div className="Text-incradit"><a href="https://www.flaticon.com/download/icon/landing/880594?format=png&size=512"><div className= "CRADIS">Photo_Cradit_4</div></a></div>         
         <div className="Text-incradit"><a href="https://www.flaticon.com/download/icon/landing/1370907?format=png&size=512"><div className= "CRADIS">Photo_Cradit_5</div></a></div>         
         <div className="Text-incradit"><a href="https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"><div className= "CRADIS">Photo_Cradit_6</div></a></div>        
         <div className="Text-incradit"><a href="https://i.pinimg.com/736x/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg"><div className= "CRADIS">Photo_Cradit_7</div></a></div>         
         <div className="Text-incradit"><a href="https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"><div className= "CRADIS">Photo_Cradit_8</div></a></div>
         <div className="addmargin"></div>   
         <div className="Fist-Text">
           Back Ground Cradit
         </div>   
         <div className="Text-incradit"><a href="https://media3.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=ecf05e478vg2zvcg11un0jivwhc2uhtjzu3nx4wx4o6cxs2o&rid=giphy.gif"><div className= "CRADIS">BG_Cradit_1</div></a></div>   
         <div className="Text-incradit"><a href="https://media4.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif?cid=ecf05e478vg2zvcg11un0jivwhc2uhtjzu3nx4wx4o6cxs2o&rid=giphy.gif"><div className= "CRADIS">BG_Cradit_2</div></a></div>
            </div>
        </div>        
      
    )
    
};

export default Cradit;
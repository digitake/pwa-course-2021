import App from './App';
import './Profile1.css';
import profile from './profile.png'
import firebase from './firebaseConfig';
import {useState,useEffect} from 'react' ;

const profileRef = firebase.database().ref('user/Natchapol');

function Profile1(params) {
    const [party,setParty] = useState("");

    useEffect(() =>{
        profileRef.on('value',snapshot =>{
          let x = snapshot.val();
          console.log("data>",x);
          setParty(x.party);
        })
      },[]);

    return(
        <App>
        <div className = "Profile">
            <div className = "Profilemid">
                <img src = {profile} alt ="" width = "300px" height ="300px"></img>
                <div className = "Profilename">
                    USERNAME : Natchapol
                </div>
                <div className = "Profileinfo">
                    {party}
                </div>

            </div>
            

            
            
        </div>
        </App>
    )
}

export default Profile1;
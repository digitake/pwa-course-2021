import App from './App';
import './Friend.css';
import { Link } from 'react-router-dom';

function Friend(){
    return(

        <App>
            <h2>My Friend</h2>

            <p></p>

        <div className="name-width-full">
            <Link to="chatbox">
                <img src="max.png" width="100" height="100" align= "middle" />
            </Link>               
          <b>ใหญ่ยาวสะท้านพิภพ</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
        <Link to="chatbox">
                <img src="Mark.png" width="100" height="100" align= "middle" />
            </Link> 

          <b>น้าเดช</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
        <Link to="chatbox">
                <img src="tin.png" width="100" height="100" align= "middle" />
            </Link> 

          <b>คาสโนวาบอย</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
        <Link to="chatbox">
                <img src="Mon.png" width="100" height="100" align= "middle" />
            </Link> 

          <b>มหาเทพ007</b>
        </div>
        <hr></hr>
        <div className="name-width-full">
        <Link to="chatbox">
                <img src="folk.png" width="100" height="100" align= "middle" />
            </Link> 

          <b>โฟคเทพซ่า</b>
        </div>
        <hr></hr>


        <p></p>
        <div>
            <Link to="addfriend">
                <p>
                <img src="add.png" width="70" />
            </p>
            </Link>
            </div>


        </App>


    )
}

export default Friend;
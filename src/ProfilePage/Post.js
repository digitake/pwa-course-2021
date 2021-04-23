import './Post.css';
import Profile from './Profile'
import { Link } from "react-router-dom";

function Post(){
    return(
    <Profile>
    <div className="Post">  
    </div>

    <div className="Post-Box"> 
           <h2>Rimuru Tempest</h2>
           <p>กรุงเทพมหานคร เป็นเมืองหลวงและนครที่มีประชากรมากที่สุดของประเทศไทย เป็นศูนย์กลางการปกครอง 
            การศึกษา การคมนาคมขนส่ง การเงินการธนาคาร การพาณิชย์ การสื่อสาร และความเจริญของประเทศ</p>

        </div>

    </Profile>
    );
};

export default Post;
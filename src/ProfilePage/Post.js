import './Post.css';
import Profile from './Profile'
import { Link } from "react-router-dom";

function Post(){
    return(
    <Profile>
    <div className="Post"> 
           <h2>Rimuru</h2>
           <p>กรุงเทพมหานคร เป็นเมืองหลวงและนครที่มีประชากรมากที่สุดของประเทศไทย เป็นศูนย์กลางการปกครอง 
            การศึกษา การคมนาคมขนส่ง การเงินการธนาคาร การพาณิชย์ การสื่อสาร และความเจริญของประเทศ</p>

           <h2>Rimuru</h2>
           <p>Hold fast to dreams For if dreams die Life is a broken-winged bird That cannot fly</p>
    </div>
    </Profile>
    );
};

export default Post;
import { Link } from 'react-router-dom';
import App from './App';
import ScriptFL from './ScriptFL';


function FriendList(){
    return ( 
    <App>
        <p> 
        </p>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="เณรเชน.jpg" width= "100%" height="100%"/>
                </div>
             <div class="flip-card-back">
                <h1>Chen wick</h1> 
                <p>มือปืนพระนคร</p> 
                <p>ขอบกินส้มตำปูปลาร้า</p>
            </div>
        </div>
        </div>
        <p> 
        </p>
        <p href="#" class="accordion">Education</p>
        <div class="panel">
            <p>โรงเรียนนานาชาติวัดเชิงหวาย</p>
            <p>โรงเรียนวัดบ้านหนองประดู่</p>
            <p>มหาลัยบางระจัน</p>

        </div>

        <p class="accordion">Experience</p>
        <div class="panel">
            <p>ชกมวย : ชนะ 150 แพ้ 0</p>
            <p>แข่งระดับโลกทุกรายการ</p>
            <p>เป็นตัวแทนระดับชาติไปสู้กับพระเจ้า</p>
        </div>

        <p class="accordion">Skills</p>
        <div class="panel">
            <p>เก่งทุกด้านบนโลก</p>
            <p>EQ : 50,000,000</p>
            <p>IQ : 50,000,000</p>
        </div>

        <p></p>
        <a href="#" class="button">SHARE MY PROFILE</a>

    </App>
    );
};

export default FriendList
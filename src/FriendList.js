
import { Link } from "react-router-dom";
import App from './App';
import Home from './Home'


function FriendList() {
    return(
        <App>
        <div>
            Friend List
            <Link to="/">
               <button>
                   Go chatroom
               </button>
            </Link>
        </div>
       
        <p> 
        </p>
        <img src = {Home} width="200" height="200"></img>
        <p> 
        </p>
        <form>
        <p>Education</p>
            <select id="country" name="country">
            <option value="rn">โรงเรียนนานาชาติวัดเชิงหวาย</option>
            <option value="ca">โรงเรียนวัดบ้านหนองประดู่</option>
            <option value="usa">มหาลัยบางระจัน</option>
            </select>
        </form>   
        <form>
        <p>Experience</p>
            <select id="country" name="country">
            <option value="rn">ชกมวย : ชนะ 150 แพ้ 0</option>
            <option value="ca">แข่งระดับโลกทุกรายการ</option>
            <option value="usa">เป็นตัวแทนระดับชาติไปสู้กับพระเจ้า</option>
            </select>
        </form>
        <form>
        <p>Skills</p>
            <select id="country" name="country">
            <option value="rn">เก่งทุกด้าน</option>
            <option value="ca">EQ : 50,000,000</option>
            <option value="usa">IQ : 50,000,000</option>
            </select>
        </form> 
        <p></p>
        <a href="#" class="button">SEND INVITATION</a>

     </App>
    );
}



    


export default FriendList



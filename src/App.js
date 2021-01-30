import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        หิวข้าวกันบ้างมั้ย
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          สวัสดีครับ/ค่ะ
        </div>
        <div className="App-chatroom-text">
          นี่คือเว็ปหาเพื่อนกินข้าว!!
        </div>
        <div className="App-chatroom-text">
          ขอให้มีอร่อยนะครับ/ค่ะ
        </div>
        <div className="App-chatroom-text">
          [ วิธีเล่น : พิมพ์ข้อความลงไปเลย เพื่อหาเพื่อนที่อยู่ใกล้เรา ]
        </div>
        <div>
          Tu : ร้านไหนมีกระเพราหมูกรอบขายบ้างครับ
        </div>
        <div>
        Pom : ลองไปดูที่โรงอาหาร A3 นะครับ
        </div>
        <div>
        Par : แถวนั้นมีร้านอาหารด้วยหรอค่ะ ว้าววว
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send">Send!</div>
      </div>
    </div>
  );
}

export default App;

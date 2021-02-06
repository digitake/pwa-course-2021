import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          สองเมียสี่
        </div>
        <div className="App-chatroom-text">
          มาร์คบางระจัน
        </div>
        <div className="App-chatroom-text">
          ชาชงกาแฟ
        </div>
        <div className="App-chatroom-text">
          ภัสโสดค้าบ
        </div>
        <div className="App-chatroom-text">
          เฟิสสเปิ๊ดก๊าด
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

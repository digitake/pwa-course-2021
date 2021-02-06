import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          ข้อความ 1
        </div>
        <div className="App-chatroom-text">
          ข้อความ 2
        </div>
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"/>
        <div className="App-textbox-send">ส่ง!</div>
      </div>
    </div>
  );
}

export default App;

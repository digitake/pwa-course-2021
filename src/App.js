import './App.css';

function App() {

  const [text, setText] = useState("x");

  const [lines, setLines] = useState(["msg1" , "msg2", "msg3" , "msg4"]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(lines => [... lines, text]);
    setText("");
  }


  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          lines.map(x =>{
            return <div className="Appchatroom-text">
              {x}
              </div>
          })
        }
        <div className="App-chatroom-text">
          
        </div>

      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange}/>
        <div className="App-textbox-send">ส่ง!</div>
      </div>
    </div>
  );
}

export default App;

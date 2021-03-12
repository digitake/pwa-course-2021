import { Link } from 'react-router-dom';
import './App.css';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">

      </div>
        <div className="App-content">
          {children}
        </div>
    </div>
   );
}

export default App;

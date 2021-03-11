
import './App.css';
import { Link} from 'react-router-dom'
import { Children } from 'react';

function App({children}) {
 
  return (
    <div className="App">
      
      <div className = "App-header">
        <div className = "App-header1"></div>
        <div className = "App-header2"></div>
        <div className = "App-header3"></div>
      </div>
      <div className = "App-content">
      {children}
      </div>
      
    </div>
  );
}
export default App;

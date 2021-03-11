 import './EndTrue.css';
 import {Link} from 'react-router-dom';
 import {useState} from 'react';

 function EndTrue() {

    const [text,setText] = useState("");
    
    const [lines, setLines] = useState(["Today.luck is favoring you.But,next time you might be unlucky like to day."]);
    
    
    
    const onTextChange = (event) => {
        setText(event.target.value);
    };
    
    const onSend = () => {
      setLines(line => [...lines,"Me : " + text]);
        setText("")
    }

  return (
    
    
           <div className="EndScene-survived">
                    <h5>-----You're Survived-----</h5>
            </div>

   
    
  );
}

 export default EndTrue;
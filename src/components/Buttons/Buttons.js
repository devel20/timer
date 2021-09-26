import React from 'react';
import './Buttons.css';


let Buttons = (props) => {
   return (
      <div className='btn'>
         <button onClick={props.start}>START</button>
         <button onClick={props.stop}>PAUSE</button>
         <button onClick={props.clear}>STOP</button>
      </div>
   )
}

export default Buttons;
import React from 'react';
import './Display.css';

let Display = (props) => {

   return (
      <div className='digit-item'>
         <span className='digit'>{(props.time.h >= 10) ? props.time.h : '0' + props.time.h}</span> :&nbsp;
         <span className='digit'>{(props.time.m >= 10) ? props.time.m : '0' + props.time.m}</span> :&nbsp;
         <span className='digit'>{(props.time.s >= 10) ? props.time.s : '0' + props.time.s}</span>
      </div>
   )
}

export default Display;
import React, { useState } from 'react';
import './App.css';

import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';


let App = () => {

  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const start = () => {

    run();
    setInterv(setInterval(run, 1000))
  };


  const run = () => {
    if (time.m === 59) {
      time.h++;
      time.m = 0;
    }
    if (time.s === 59) {
      time.m++;
      time.s = 0;
    }
    time.s++;
    return setTime({ s: time.s, m: time.m, h: time.h });

  }


  const stop = () => {
    clearInterval(interv);

  }

  const clear = () => {
    clearInterval(interv);
    return setTime({ s: 0, m: 0, h: 0 });
  }


  return (
    <div className='wrapper'>
      <div className='timer'>

        <Display time={time} />
        <Buttons start={start} stop={stop} clear={clear} />

      </div>
    </div>
  )
}
export default App;

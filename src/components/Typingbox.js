import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Typingbox = () => {

    const [time, setTime] = useState(15);
    let displaytext = "Lorem Lispum afneubb iubveu ubibie woejqzx aopqlpzlie wqzct awer";
    let keychar = 0;

  return (
    <div>

      <div className='row-1'>
        <div>{time}</div>
        <Button variant="contained">Contained</Button>
        <div>
            <button onClick={() => setTime(15)}>15</button>
            <button onClick={() => setTime(30)}>30</button>
            <button onClick={() => setTime(60)}>60</button>
        </div>
      </div>

      <div className='text-box'>
        {displaytext.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';

function TypingTest() {
  const [countdown, setCountdown] = useState(15); // Initial time in seconds
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);

  useEffect(() => {
    let interval;
    if (testStart && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setTestEnd(true);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [testStart, countdown]);

  // Other timer-related code

  return (
    
  );
}

import React, { useState, useEffect } from 'react';

function TypingTest() {
  const [countdown, setCountdown] = useState(15); // Initial time in seconds
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);

  useEffect(() => {
    let interval;
    if (testStart && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setTestEnd(true);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [testStart, countdown]);

  // Other timer-related code

  return (
    // Render timer and typing test components
  );
}



export default Typingbox

import React, { useState } from 'react';
import Section from './Section';
import Notification from './Notification';

export default function App() {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  function onLeaveFeedback(param) {

    console.log(param.target.innerHTML)
    if (param.target.innerHTML === 'Good') { 
                    return setGood(good + 1)
    }
    if (param.target.innerHTML === 'Neutral') { 
                    return setNeutral(neutral + 1)
    }
    if (param.target.innerHTML === 'Bad') { 
                    return setBad(bad + 1)
    }
    
  }

  return (
    <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}>
        <Section title="Please leave feedback"
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={onLeaveFeedback}>
          
          </Section>
        
        {good + bad + neutral <= 0 && <Notification message={"There is no feedback" }></Notification>}
          
      </div>
  )
}


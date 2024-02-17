import React from 'react'

export default function Statistics({good, neutral, bad, total, positivePercentage }) {
  let positiveFeedback
  good === 0 ? positiveFeedback = 0 : positiveFeedback = positivePercentage 
  return (
    <div>
          <h2>Statistics</h2>
        {total > 0 && <ul>
                <li>Good: { good}</li>
                <li>Neutral: { neutral}</li>
                <li>Bad: { bad}</li>
                <li>Total: {total} </li>
                <li>Positive feedback: { positiveFeedback.toFixed()}%</li>
          </ul>}
          
    </div>
  )
}




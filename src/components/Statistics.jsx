import React, { Component } from 'react'

export default class Statistics extends Component {
    
    
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props
        let positiveFeedback
        good === 0 ? positiveFeedback = 0 : positiveFeedback = positivePercentage 
       
    return (
      <div>
          <h2>Statistics</h2>
        {total > 0 && <ul>
                <li>Good:{ good}</li>
                <li>Neutral: { neutral}</li>
                <li>Bad: { bad}</li>
                <li>Total: {total} </li>
                <li>Positive feedback: { positiveFeedback.toFixed()}%</li>
          </ul>}
          
    </div>
    )
  }
}

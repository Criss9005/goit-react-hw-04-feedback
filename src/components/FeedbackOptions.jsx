import styles from './FeedbackOptions.module.css'
import React from 'react'

export default function FeedbackOptions({ onLeaveFeedback}) {
  return (
    <ul className={styles.buttonList }>
            
          <li><button onClick={onLeaveFeedback} >Good</button> </li>
          <li><button onClick={onLeaveFeedback}>Neutral</button></li>
          <li><button onClick={onLeaveFeedback}>Bad</button></li>
  
      </ul>
  )
}

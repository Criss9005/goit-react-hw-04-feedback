import React, { Component } from 'react'
import styles from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {
    render() {
      const { onLeaveFeedback} = this.props
      return (
        <ul className={styles.buttonList }>
            
          <li><button onClick={onLeaveFeedback} >Good</button> </li>
          <li><button onClick={onLeaveFeedback}>Neutral</button></li>
          <li><button onClick={onLeaveFeedback}>Bad</button></li>
  
      </ul>
    )
  }
}

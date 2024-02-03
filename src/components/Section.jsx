import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        const { good, neutral, bad, onLeaveFeedback, title} = this.props
    return (
      <><h2>{ title} </h2>
            <FeedbackOptions onLeaveFeedback={ onLeaveFeedback} />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={good + neutral + bad}
                positivePercentage={ 100* good /(good + neutral + bad)}
            />
          </>
    )
  }
}




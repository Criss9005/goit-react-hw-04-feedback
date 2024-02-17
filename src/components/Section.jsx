import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import React from 'react'

export default function Section({ good, neutral, bad, onLeaveFeedback, title}) {
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






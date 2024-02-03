import React, { Component } from 'react';
import Section from './Section';
import Notification from './Notification';

export default class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }
  
  onLeaveFeedback = (param) => {
    console.log(param.target.innerHTML)

    this.setState((st) => {
                if (param.target.innerHTML === 'Good') { 
                    return { good: st.good + 1 };
                }
                 if (param.target.innerHTML === 'Neutral') { 
                    return { neutral: st.neutral + 1 };
                }
                 if (param.target.innerHTML === 'Bad') { 
                    return { bad: st.bad + 1 };
                }

            })
  }

  render() {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}>
        <Section title="Please leave feedback"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onLeaveFeedback={this.onLeaveFeedback}>
          
          </Section>
        
        {this.state.good + this.state.bad + this.state.neutral <= 0 && <Notification message={"There is no feedback" }></Notification>}
          
      </div>
    )
  }
}


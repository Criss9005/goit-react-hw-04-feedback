import React, { Component } from 'react'

export default class Feedback extends Component {
   

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
            
    };
        
    handleFeddback = (param) => {
        
         
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

            }, this.updateTotal() );
        
        
    };

    updateTotal() { 
        this.setState((st) => { 
            st.total = st.good + st.neutral + st.bad
        })
    }


    render() {
    return (
        <div>
            <h2>Please leave feedback </h2>
            <button onClick={this.handleFeddback}>Good</button> 
          <button onClick={this.handleFeddback}>Neutral</button>
          <button onClick={this.handleFeddback}>Bad</button>
          <h2>Statistics</h2>
          <ul>
                <li>Good: { this.state.good} </li>
              <li>Neutral: { this.state.neutral}</li>
                <li>Bad: {this.state.bad}</li>
                <li>Total: {this.state.total}</li>
                <li>Positive feedback: {this.state.positiveFeedback}</li>
          </ul>
            </div>
    )
  }
}


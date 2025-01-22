import React, { Component } from 'react'

export default class Task7 extends Component {
  render() {
    return (
      <div>
        <button >
        {this.props.onClick}
        
        {this.props.label}
          </button>

      </div>
    )
  }
}


// import React from 'react'


// class Task7 extends React.Component {
 
//     render() {

// return (
//     <div>
//         <button onClick={this.props.onClick}>{this.props.label}</button>
//     </div>
//   )
//   }}
// export default Task7



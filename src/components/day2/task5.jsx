import React, { Component } from 'react'

export default class Task5 extends Component {
  render() {
    return (
      <div  style={{width:"200px",height:"200px",background:"lightblue",textAlign:'center' , border: "1px solid black" , borderRadius:"15px"}} >

         <p>{this.props.avatar}</p>
         <h3>{this.props.name}</h3>
         <h4>{this.props.email}</h4>
    
    
      </div>
    )
  }
}

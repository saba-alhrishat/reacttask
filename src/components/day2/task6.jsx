import React, { Component } from 'react'

export default class Task6 extends Component {
render() {
return (
<div >
<h1>   
       {this.props.title}
</h1>    
{this.props.hLink}
{this.props.aLink}
{this.props.ctLink}
</div>
)
}
}


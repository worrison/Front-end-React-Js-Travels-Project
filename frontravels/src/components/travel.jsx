import React, { Component } from 'react'

class Travel extends Component {
    render() {
        return ( 
        <div>
            <h3>{this.props.destino}</h3>
            <h3>{this.props.date}</h3>
        </div> )
    }
}

export default Travel
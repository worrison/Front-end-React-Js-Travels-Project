import React, {Component} from 'react'

class Travel extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="card col-md-4">
                <h1>{this.props.destino}</h1>
                <img src={this.props.imgpath}/>
                <h3>{this.props.precio}€.</h3>
                <h3>{this.props.descuento}</h3>
            </div>
        )
    }
}

export default Travel
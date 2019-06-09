import React, {Component} from 'react'

class Travel extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="card col-md-4">
                <h1>{this.props.destino}</h1>
                <img src={this.props.ruta_img}/>
                <h3>{this.props.fecha_salida}</h3>
                <h3>{this.props.fecha_llegada}</h3>
                <h3>{this.props.precio}€.</h3>
                <h3>{this.props.descuento}</h3>
            </div>
        )
    }
}

export default Travel
import React, { Component } from 'react'
import Travel from './travel'
import travelController from '../controllers/travelControllers'
import axios from 'axios'

class Travels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listTravels: [],
            fields: {
                destino: '',
                fecha_salida: '',
                fecha_llegada: '',
                precio: '',
                descuento: '',
                ruta_img: ''
            }

        }

        travelController.getTravels()
            .then(res => {
                const listTravels = res.data;
                this.setState({ listTravels });
            })

        this.onAddTravel = this.onAddTravel.bind(this);
    }
    onFieldChanges(event) {

        let formFields = { ...this.state.fields };
        formFields[event.target.name] = event.target.value;
        this.setState(
            { fields:formFields }
        );


        // this.setState({
        //     [event.target.name]:event.target.value
        // })

    }
    onAddTravel(event) {

        this.setState({

            listTravels: [
                ...this.state.listTravels,//todo lo que contiene el array anteriormente
                {
                    destino: this.state.fields.destino,
                    fecha_salida: this.state.fields.fecha_salida,
                    fecha_llegada: this.state.fields.fecha_llegada,
                    precio: this.state.fields.precio,
                    descuento: this.state.fields.descuento,
                    ruta_img: this.state.fields.ruta_img

                }
            ],
            destino: '',
            fecha_salida: '',
            fecha_llegada: '',
            precio: '',
            descuento: '',
            ruta_img: ''
        })
        console.log(this.state.listTravels);
        axios.post('http://localhost:3000/api/travel', this.state.fields)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }
    submit(data) {
        console.log('submit form');
        console.log(data);
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onAddTravel}>
                    <input name="destino" type="text" value={this.state.fields.destino} onChange={(e) => this.onFieldChanges(e)} />
                    <input name="fecha_salida" type="date" value={this.state.fields.fecha_salida} onChange={(e) => this.onFieldChanges(e)} />
                    <input name="fecha_llegada" type="date" value={this.state.fields.fecha_llegada} onChange={(e) => this.onFieldChanges(e)} />
                    <input name="precio" type="number" value={this.state.fields.precio} onChange={(e) => this.onFieldChanges(e)} />
                    <input name="descuento" type="number" value={this.state.fields.descuento} onChange={(e) => this.onFieldChanges(e)} />
                    <input name="ruta_img" type="text" value={this.state.fields.ruta_img} onChange={(e) => this.onFieldChanges(e)} />
                    <input type="submit" value="guardar"></input>
                </form>
                {this.state.listTravels.map((item, i) => <Travel key={i} {...item}></Travel>)}
            </div>
        )
    }
}

export default Travels
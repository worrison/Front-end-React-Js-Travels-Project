import React, { Component } from 'react'
import Travel from './travel'
import travelController from '../controllers/travelControllers'

class Travels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listTravels: [],
            destino:""
        }
        this.onAddTravel = this.onAddTravel.bind(this);
        travelController.getTravels()
            .then(res => {
                const listTravels = res.data;
                this.setState({ listTravels });
            })
    }
    onDestinoChanges(event) {
        this.setState({
            destino: event.target.value
        })
        
    }
    onDestinoChanges(event){
        this.setState({
            destino: event.target.value
        })
    }
    onAddTravel(event) {
        console.log(this.state.destino);
        this.setState({
            listTravels: [
                ...this.state.films,
                { destino: this.state.destino }
            ],
            destino: '',
        })
        event.preventDefault();
    }
    submit(data){
        console.log('submit form');
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.listTravels.map(item => <Travel {...item}></Travel>)}
                <form onSubmit={this.onAddTravel}>
                    <input name="destino" value={this.state.destino} onChange={(e) => this.onDestinoChanges(e)} />
                </form>
            </div>
        )
    }
}

export default Travels
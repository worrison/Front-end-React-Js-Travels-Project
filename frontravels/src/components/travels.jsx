import React, { Component } from 'react'
import Travel from './travel'
import travelController from '../controllers/travelControllers'

class Travels extends Component {
    constructor(props) {
        super()
        this.state = {
            listTravels: []
        }
        travelController.getTravels()
        .then(res => {
            const listTravels = res.data;
            this.setState({ listTravels });
          })
    }

    render() {
        return(
            <div>
                {this.state.listTravels.map(item =><Travel {...item}></Travel>)}
            </div>
        )
    }
}

export default Travels
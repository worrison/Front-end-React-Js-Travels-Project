import React, { Component } from 'react'
import Travel from './travel'

    class Travels extends Component {
        constructor(props) {
            super(props)
            this.state = { 

                travels: [{ destino: "New York", date:2019 },{ destino: "New York", date:2019 }]
            }
        }

        render() {
            return (
                <div>
                    <h2>Travels</h2>
                    {this.state.travels.map(item =><Travel {...item}></Travel>)}
                </div>
            )
        }
    }
export default Travels
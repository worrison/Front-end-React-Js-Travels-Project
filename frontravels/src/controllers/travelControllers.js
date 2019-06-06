import React, { Component } from 'react'
import Api from './config.js';
import axios from 'axios';

export default class TravelList extends Component
{
    state={
        travels:[],
    };
    componentDidMount(){
        axios.get(Api).then(res=>{
            console.log(res);
            this.setState({travels:res.data})
        });
    }
}
render()
{
    return <ul>
            {this.state.travels.map(tavel =><li>{travel.destino}</li>)}
           </ul>
}

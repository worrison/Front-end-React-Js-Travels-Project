import Api from './config.js';
import axios from 'axios';

let getTravels = () => {
    return axios.get(Api)
 }   
 
 export default {getTravels}














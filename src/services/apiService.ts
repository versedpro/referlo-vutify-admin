import Axios from 'axios';

export default {
  
  getApiVersion() { 
    return Axios.get('GetApiVersion');
  },

  getJsonData() {
    return Axios.get('GetJsonData');
  }

};
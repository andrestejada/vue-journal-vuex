import axios from "axios";

const authApi = axios.create({
  baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
  params:{
    key:'AIzaSyD9JehozhRRg_-2BDktLsw3t8KBExHuVxA',
  }
})

export default authApi;
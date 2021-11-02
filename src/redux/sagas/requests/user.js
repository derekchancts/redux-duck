import axios from 'axios';


export function requestGetUser() {
  return axios.request({
    method: 'get',
    // url: 'https://my-json-server.typicode.com/derekchancts/demo/users'
    url: 'http://localhost:5000/users'
  })
}
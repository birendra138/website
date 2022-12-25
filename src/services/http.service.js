import axios from 'axios';
export let URL=process.env.REACT_APP_API_URL;
export let URL_PROFILE="http://localhost:5000/uploads/avatar/";
export let AUTH_TOKEN=localStorage.getItem('token')||'';

axios.defaults.baseURL = URL;
axios.defaults.headers.common['x-auth-token'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const http=axios;



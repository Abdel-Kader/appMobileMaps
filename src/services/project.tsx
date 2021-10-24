import axios from 'axios';
import {API_URL} from '../config';

export function getProjects() {
  axios
    .get(API_URL)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data.error.message;
    });
}

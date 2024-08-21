import axios from "axios";

const SERVER_ADDRESS = "http://0.0.0.0";
const SERVER_PORT = 6003;
export const getRequest = (query) => {
  return axios
  .get(`${SERVER_ADDRESS}:${SERVER_PORT}/v1/${query}`)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });
}
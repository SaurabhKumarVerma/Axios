import axios from "axios";

const secureaxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default secureaxios;

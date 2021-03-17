import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-138ce-default-rtdb.firebaseio.com/",
});

export default instance;

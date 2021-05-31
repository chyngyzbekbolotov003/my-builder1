import axios from "../../axios";

const instance = axios.create();
instance.defaults.baseURL = "https://my-builder1-default-rtdb.firebaseio.com";

export default instance;
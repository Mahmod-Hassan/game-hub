import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "26c71fb6a08346639d2962ec33fa3fa0",
  },
});

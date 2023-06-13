import axios from "axios";

const config = { baseURL: "http://localhost:3000/" } as const;

export const get = (url: Url) =>
  axios
    .request({ ...config, url })
    .then((response) => response.data)
    .catch((cause) => {
      throw new Error("Failed to perform request", { cause });
    });

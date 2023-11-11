import { api } from "../boot/axios";

const LoginUser = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("user/login/", payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export { LoginUser };

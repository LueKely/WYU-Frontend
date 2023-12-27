import { api } from "../boot/axios";

const LoginUser = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("auth/login", payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const RegisterUser = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("auth/register", payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export { LoginUser, RegisterUser };

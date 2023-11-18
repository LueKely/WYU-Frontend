import { api } from "../boot/axios";

/* ALL HTTP REQUEST ABOUT RECIPES HERE */

const GetAllRecipe = () => {
  return new Promise((resolve, reject) => {
    api
      .get("recipe/")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const GetRecipe = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .get(`recipe/?id=${payload.id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const CreateRecipe = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("recipe/create/", payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { GetAllRecipe, GetRecipe, CreateRecipe };

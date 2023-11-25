import { api } from "../boot/axios";
import { useUserStore } from "../stores/userStore";
import { LocalStorage } from "quasar";

const userStore = useUserStore();

/* ALL HTTP REQUEST ABOUT RECIPES HERE */

const GetAllRecipe = () => {
  return new Promise((resolve, reject) => {
    api
      .get("recipe/", {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
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
      .get(`recipe/?id=${payload.id}`, {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
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
      .post("recipe/create/", payload, {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const LikeORUnlike = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("itr/like/", payload, {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const AddNewComment = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("itr/comment/", payload, {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const SaveOrUnsave = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("itr/save/", payload, {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  GetAllRecipe,
  GetRecipe,
  CreateRecipe,
  LikeORUnlike,
  AddNewComment,
  SaveOrUnsave,
};

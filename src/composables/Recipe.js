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

const GetRecipeByName = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .get(`recipe/?name=${payload.name}`, {
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

const GetRecipeByCategory = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .get(`recipe/?category=${payload.category}`, {
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

const UpdateRecipe = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .put("recipe/update/", payload, {
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
        reject(error.response);
      });
  });
};

const DeleteRecipe = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`recipe/delete/?id=${payload.id}`, {
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
        reject(error.response);
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
  GetRecipeByName,
  GetRecipeByCategory,
  CreateRecipe,
  UpdateRecipe,
  DeleteRecipe,
  LikeORUnlike,
  SaveOrUnsave,
  AddNewComment,
};

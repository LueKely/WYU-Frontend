import { LocalStorage } from "quasar";

import { api } from "../boot/axios";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();

const GetAllUserInfo = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .get(`profile/?id=${payload.id}&isSelfVisit=${payload.isSelfVisit}`, {
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

const EditUserInfo = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .put(`profile/edit/`, payload, {
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

export { GetAllUserInfo, EditUserInfo };

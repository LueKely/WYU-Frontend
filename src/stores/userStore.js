import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { readonly } from "vue";

/* DI PA TO NAGAGAMITTT */
export const useUserStore = defineStore("user", () => {
  const user = ref(localStorage.getItem("user") || "");
  const token = ref(JSON.parse(localStorage.getItem("Bearer")) || "");

  const getUser = readonly(computed(() => user.value) || "");
  const getToken = readonly(computed(() => token.value) || "");

  const setUser = (data) => {
    if (!data) {
      return false;
    }

    localStorage.setItem("user", JSON.stringify(data));
  };

  const setToken = (inputToken) => {
    if (!inputToken) {
      return false;
    }

    localStorage.setItem("Bearer", JSON.stringify(inputToken));
  };

  return {
    getUser,
    getToken,
    setUser,
    setToken,
  };
});

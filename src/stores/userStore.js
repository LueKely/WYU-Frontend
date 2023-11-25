import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref("");
  const token = ref("");

  const getUser = computed(() => user.value);
  const getToken = computed(() => token.value);

  const setUser = (data) => {
    if (!data) {
      return false;
    }

    user.value = data;
  };

  const setToken = (inputToken) => {
    if (!inputToken) {
      return false;
    }

    token.value = inputToken;
  };

  return {
    getUser,
    getToken,
    setUser,
    setToken,
  };
});

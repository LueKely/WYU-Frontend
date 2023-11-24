import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCacheStore = defineStore("cache", () => {
  const recentPosts = ref({});
  const recipe = ref({
    recipes: {},
  });

  const setRecentPostsCache = (key, post) => {
    if (key && post) {
      recentPosts.value[key] = post;
    }
  };

  const setRecipeCache = (key, inputRecipe) => {
    if (key && recipe) {
      recipe.value.recipes[key] = inputRecipe;
    }
  };

  const getRecipeCacheByKey = (key) => {
    if (key) {
      let isInTheCache = recipe.value.recipes[key];

      if (isInTheCache) {
        return isInTheCache;
      } else {
        return false;
      }
    }
  };

  return {
    recentPosts,
    recipe,
    setRecentPostsCache,
    setRecipeCache,
    getRecipeCacheByKey,
  };
});

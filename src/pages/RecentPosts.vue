<template>
  <div class="page--recent">
    <div class="container--recent" v-if="!pageLoadingState">
      <div class="card__container--recent">
        <div
          class="card__loop"
          v-for="(data, index) in recipeList"
          :key="index"
        >
          <WideCard :recipeData="data"></WideCard>
        </div>
      </div>
    </div>
    <q-btn
      class="create_btn"
      unelevated
      round
      color="primary"
      icon="add"
      size="20px"
      :to="{ name: 'create' }"
    />
    <q-inner-loading :showing="pageLoadingState" color="accent-2" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { GetAllRecipe } from "../composables/Recipe";
import { useCacheStore } from "../stores/cacheStore";

import WideCard from "../components/recentPostAssets/WideCard.vue";

let pageLoadingState = ref(true);

const recipeList = ref([]);
const caching = useCacheStore();

onMounted(() => {
  pageLoadingState.value = true;
  if (Object.keys(caching.recentPosts).length === 0) {
    GetAllRecipe()
      .then((response) => {
        if (response.status === "success") {
          recipeList.value = response.data;
          caching.setRecentPostsCache("recentPosts", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        pageLoadingState.value = false;
      });
  } else {
    recipeList.value = caching.recentPosts.recentPosts;
    pageLoadingState.value = false;
  }
});
</script>

<style lang="scss" scoped>
.create_btn {
  position: fixed;
  bottom: 20px;
  right: 50px;
  z-index: 100;
}
</style>

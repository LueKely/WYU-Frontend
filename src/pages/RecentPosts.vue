<template>
  <div class="page--recent">
    <div class="container--recent" v-if="!pageLoadingState">
      <h2 style="align-self: flex-start" class="text-43 text-bold q-mb-md">
        Recent Posts
      </h2>
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
import WideCard from "@recent/WideCard.vue";

import { ref, onMounted } from "vue";
import { GetAllRecipe } from "@composables/Recipe";

const pageLoadingState = ref(false);
const recipeList = ref([]);

onMounted(() => {
  pageLoadingState.value = true;
  GetAllRecipe()
    .then((response) => {
      if (response.status === "success") {
        recipeList.value = response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      pageLoadingState.value = false;
    });
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

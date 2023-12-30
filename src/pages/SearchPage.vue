<template>
  <div class="page page--search">
    <div class="container--search">
      <div class="search__container--text">
        <h3 class="font-bold text-32">Search</h3>
        <h4 class="text-18">results for: "{{ route.params.q }}"</h4>
      </div>
      <hr style="width: 100%; color: #f7f2f2; margin-bottom: 10px" />
      <div class="result__container">
        <!-- if empty result from fetching -->
        <div v-if="!recipeList" class="results--error">
          <h3 class="text-24">No results Found</h3>
          <p>
            Looks like we don't have what you are looking for <br />
            how about you create the recipe and share it with the world?
          </p>
        </div>

        <div v-else class="card__container--search">
          <div v-for="(object, index) in recipeList" :key="index">
            <SearchCard v-bind="object"></SearchCard>
          </div>
        </div>
      </div>
      <q-inner-loading :showing="pageLoadingState" color="accent-2" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import SearchCard from "../components/searchAssets/SearchCard.vue";
import { GetRecipeByName } from "@composables/Recipe";

const route = useRoute();
let pageLoadingState = ref(false);
const recipeList = ref([]);

const SearchRecipeByName = () => {
  recipeList.value = [];
  pageLoadingState.value = true;
  GetRecipeByName({ name: route.params.q })
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
};

watch(
  () => route.params.q,
  (value) => {
    value && SearchRecipeByName();
  }
);

onMounted(() => {
  SearchRecipeByName();
});
</script>

<style lang="scss" scoped></style>

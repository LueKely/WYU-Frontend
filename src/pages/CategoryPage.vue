<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page page--search">
      <div v-if="!pageLoadingState" class="container--search">
        <div class="search__container--text">
          <h3 class="font-bold text-32">Category: {{ category }}</h3>
        </div>
        <hr style="width: 100%; color: #f7f2f2; margin-bottom: 10px" />
        <div class="result__container">
          <!-- if empty result from fetching -->
          <div
            v-if="!recipeLists || recipeLists.length == 0"
            class="results--error"
          >
            <h3 class="text-24">No recipes yet</h3>
            <p>
              Looks like we don't have what you are looking for <br />
              how about you create the recipe and share it with the world?
            </p>
          </div>

          <div v-else class="card__container--search">
            <div v-for="(object, index) in recipeLists" :key="index">
              <SearchCard v-bind="object"></SearchCard>
            </div>
          </div>
        </div>
      </div>
      <q-inner-loading :showing="pageLoadingState" color="accent-2" />
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useRoute } from "vue-router";
import { GetRecipeByCategory } from "../composables/Recipe";

import SearchCard from "../components/searchAssets/SearchCard.vue";

const route = useRoute();

let pageLoadingState = ref(false);

const category = ref(route.params.category || "");
const recipeLists = ref([]);

onMounted(() => {
  pageLoadingState.value = true;
  GetRecipeByCategory({ category: category.value })
    .then((response) => {
      if (response.status === "success") {
        recipeLists.value = response.data ? response.data : [];
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
.page--discover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(230, 199, 199);
}
</style>

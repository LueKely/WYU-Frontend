<template>
  <section v-if="!carouselLoadingState">
    <div class="heading flex justify-between items-center q-pr-sm">
      <h3 class="text-32 font-bold">Recent Post</h3>
      <p
        class="text-accent-2 text-semibold text-18 cursor-pointer"
        @click="recipesData.length > 0 && router.push({ name: 'recent' })"
      >
        See all
      </p>
    </div>

    <p class="text-18">Fresh Bites: Explore Our Latest Updates and Insights</p>

    <CarouselComponent
      v-if="recipesData && recipesData.length > 0 && !carouselLoadingState"
      :payload="recipesData"
    />
    <p v-else class="empty-data flex flex-center q-pa-lg text-24">
      No recipe posts found.
    </p>
    <q-inner-loading :showing="carouselLoadingState" color="accent-2" />
  </section>
</template>

<script setup>
import { LocalStorage } from "quasar";
import { useRouter } from "vue-router";
import { provide, ref, onMounted } from "vue";

import { GetAllRecipe } from "../../composables/Recipe";
import { useUserStore } from "../../stores/userStore";
import CarouselComponent from "../carouselAssets/CarouselComponent.vue";

provide("isRecipe", true);
const router = useRouter();
let carouselLoadingState = ref(true);

const recipesData = ref([]);
const userStore = useUserStore();

onMounted(() => {
  carouselLoadingState.value = true;
  let isTokenAvailable = userStore.getToken || LocalStorage.getItem("Bearer");

  if (isTokenAvailable) {
    GetAllRecipe()
      .then((response) => {
        if (response.status === "success") {
          recipesData.value = response.data;
          carouselLoadingState.value = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 5px;

  width: 100%;

  margin-top: 30px;

  .heading,
  .empty-data {
    width: 100%;
  }
}
</style>

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
    <q-inner-loading :showing="carouselLoadingState" />
  </section>
</template>

<script setup>
import CarouselComponent from "../carouselAssets/CarouselComponent.vue";
import { provide, ref, onMounted } from "vue";
import { GetAllRecipe } from "@composables/Recipe";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/userStore";
import { LocalStorage } from "quasar";

provide("isRecipe", true);
const router = useRouter();
const carouselLoadingState = ref(true);
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
  margin-top: 30px;

  width: 100%;

  row-gap: 5px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

h3,
p {
  margin: 0;
}

.heading {
  width: 100%;
}

section {
  .empty-data {
    width: 100%;
  }
}
</style>

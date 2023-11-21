<template>
  <section>
    <h3 class="text-32 font-bold">Categories</h3>
    <p class="text-18">Browse by Flavor: Explore Our Diverse Categories</p>

    <CarouselComponent />
  </section>
</template>

<script setup>
import CarouselComponent from "../carouselAssets/CarouselComponent.vue";
import { provide, ref } from "vue";

const page = ref([
  ["a", "b", "c"],
  ["d", "f", "g"],
  ["e", "f", "g"],
]);

// card: url, titel,description
</script>

<style lang="scss" scoped>
section {
  margin-top: 50px;
  width: 100%;
  // background-color: rgba(201, 124, 124, 0.897);

  row-gap: 5px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
</style>

<template>
  <section>
    <h3 class="text-32 font-bold">Recent Post</h3>
    <p class="text-18">Fresh Bites: Explore Our Latest Updates and Insights</p>
    <CarouselComponent />
  </section>
</template>

<script setup>
import CarouselComponent from "../carouselAssets/CarouselComponent.vue";
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
</style>

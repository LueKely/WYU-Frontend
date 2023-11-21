<template>
  <section>
    <h3>Recent Post</h3>
    <h5>insert cards here</h5>
    <CarouselComponent />
  </section>
</template>

<script setup>
import CarouselComponent from "../carouselAssets/CarouselComponent.vue";
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  background-color: rgba(201, 124, 124, 0.897);

  row-gap: 5px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
</style>

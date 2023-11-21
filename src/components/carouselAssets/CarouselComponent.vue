<template>
  <div class="carousel__container">
    <CarouselCard />
  </div>
</template>

<script setup>
import CarouselCard from "../carouselAssets/CarouselCard.vue";
</script>

<style lang="scss" scoped>
.carousel__container {
  width: 100%;
  background-color: rgb(235, 212, 212);
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

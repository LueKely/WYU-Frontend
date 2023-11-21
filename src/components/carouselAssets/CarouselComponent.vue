<template>
  <div class="carousel__container">
    <div class="carousel" :class="{ one: page == 1, two: page == 2 }">
      <div class="carousel__list--card">
        <div class="carousel__container--cards" v-for="index in 3" :key="index">
          <CarouselCard v-for="index in 4" :key="index" />
        </div>
      </div>
    </div>

    <div class="carousel__container--buttons">
      <q-btn
        round
        size="20px"
        color="accent"
        icon="arrow_back"
        @click="prevPage"
      ></q-btn>
      <q-btn
        round
        size="20px"
        color="accent"
        icon="arrow_forward"
        @click="nextPage"
      ></q-btn>
    </div>
  </div>
</template>

<script setup>
import CarouselCard from "../carouselAssets/CarouselCard.vue";
import { ref } from "vue";

const page = ref(0);

function nextPage() {
  if (page.value == 2) return;
  page.value++;
}

function prevPage() {
  if (page.value == 0) return;
  page.value--;
}
</script>

<style lang="scss" scoped>
.carousel__container {
  overflow: hidden;

  width: 100%;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
}

.carousel {
  // background-color: red;
  transition: all 0.5s ease-in-out;

  position: absolute;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  left: 102%;
}

.carousel.one {
  transition: all 0.5s ease-in-out;
  left: 0%;
}
.carousel.two {
  transition: all 0.5s ease-in-out;
  left: -102%;
}

.carousel__list--card {
  // overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  column-gap: 20px;
}

.carousel__container--cards {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: absolute;
  column-gap: 10px;
  padding-inline: 10px;
}

.carousel__container--buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  column-gap: 20px;
  padding-inline: 10px;
}
</style>

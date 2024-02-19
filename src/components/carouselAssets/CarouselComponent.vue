<template>
  <div class="carousel">
    <div
      class="carousel__container"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <div class="carousel__container--cards" v-for="index in 2" :key="index">
        <CarouselCard
          v-for="(item, n) in groupedData[index - 1]"
          :key="n"
          :payload="item"
        />
      </div>
    </div>

    <div class="carousel__container--buttons">
      <q-btn
        :disable="turn == 1"
        round
        size="20px"
        color="accent"
        icon="arrow_back"
        @click="prevPage"
      ></q-btn>
      <q-btn
        :disable="turn == 2"
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
import { computed, ref } from "vue";

import CarouselCard from "../carouselAssets/CarouselCard.vue";

// generate a prop for the carousel card component
const props = defineProps({
  payload: Array,
});

const translateX = ref(370);
const turn = ref(1);
const turnLength = 810;

const nextPage = () => {
  if (turn.value == groupedData.value.length) return;
  turn.value++;
  translateX.value -= turnLength;
};

const prevPage = () => {
  if (turn.value == 0) return;
  turn.value--;
  translateX.value += turnLength;
};

// this splits the props into three groups
const groupedData = computed(() => {
  let groups = [];
  for (let i = 0; i < props.payload.length; i += 3) {
    groups.push(props.payload.slice(i, i + 3));
  }
  return groups;
});
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 350px;

  overflow: hidden;

  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    transition: all 0.5s ease-in-out;

    &--cards {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &--buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 20px;

      position: absolute;

      width: 100%;

      padding-inline: 10px;
    }
  }
}
</style>

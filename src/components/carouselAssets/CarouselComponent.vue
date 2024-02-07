<template>
  <div class="carousel__container">
    <div class="carousel" :style="{ transform: `translateX(${translateX}px)` }">
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
import CarouselCard from "../carouselAssets/CarouselCard.vue";
import { computed, ref } from "vue";

// generate a prop for the carousel card component
const props = defineProps({
  payload: Array,
});

const translateX = ref(370);
const turn = ref(1);

const turnLength = 810;

function nextPage() {
  if (turn.value == groupedData.value.length) return;
  turn.value++;
  translateX.value -= turnLength;
}

function prevPage() {
  if (turn.value == 0) return;
  turn.value--;
  translateX.value += turnLength;
}

const length = computed(() => {
  return groupedData.value.length;
});

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
  transition: all 0.5s ease-in-out;

  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  left: 0;
}

.carousel__list--card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  justify-content: center;

  position: relative;
  column-gap: 20px;
}

.carousel__container--cards {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

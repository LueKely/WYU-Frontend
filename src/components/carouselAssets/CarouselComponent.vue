<template>
  <div class="carousel__container">
    <div class="carousel" :style="{ transform: `translateX(${translateX}px)` }">
      <div class="carousel__list--card">
        <div
          class="carousel__container--cards"
          v-for="(group, index) in groupedData"
          :key="index"
        >
          <CarouselCard v-for="(item, index) in group" :key="index" />
        </div>
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
        :disable="turn == groupedData.length - 1"
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
import { onMounted, computed, ref, watchEffect } from "vue";

const translateX = ref(500);
const turn = ref(1);

const turnLength = 1080;

function nextPage() {
  if (turn.value == groupedData.value.length - 1) return;
  turn.value++;
  translateX.value -= turnLength;
  console.log(turn.value);
}

function prevPage() {
  if (turn.value == 0) return;
  turn.value--;
  translateX.value += turnLength;
}

// generate a prop for the carousel card component
const props = defineProps({
  payload: Array,
});

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

onMounted(() => {
  console.log(groupedData.value);
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

  position: absolute;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
  justify-content: space-between;

  // position: absolute;
  column-gap: 40px;
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

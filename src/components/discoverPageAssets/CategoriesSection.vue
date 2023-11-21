<template>
  <section>
    <h3 class="text-32 font-bold">Categories</h3>
    <p class="text-18">Browse by Flavor: Explore Our Diverse Categories</p>
    <CarouselComponent :payload="dummyData" />
  </section>
</template>

<script setup>
import CarouselComponent from "../carouselAssets/CarouselComponent.vue";
import { provide, ref } from "vue";
const dummyData = ref([
  {
    title: "lorem1",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem2",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem3",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem4",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem5",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem6",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem1",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem2",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem3",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem4",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem5",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
  {
    title: "lorem6",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor  nemo explicabo repellendus necessitatibus adipisci veritatis harum,",
    url: "https://picsum.photos/500/300",
  },
]);
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

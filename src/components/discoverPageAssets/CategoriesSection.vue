<template>
  <section>
    <h3 class="text-32 font-bold">Categories</h3>
    <p class="text-18">Browse by Flavor: Explore Our Diverse Categories</p>
    <CarouselComponent :payload="categoriesData" />
  </section>
</template>

<script setup>
import { provide, ref } from "vue";

import CarouselComponent from "../carouselAssets/CarouselComponent.vue";

provide("isRecipe", false);

const categoriesData = ref([
  {
    categories: "Breakfast",
    description:
      "Start your day right with delicious and nutritious breakfast options. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nemo explicabo repellendus necessitatibus adipisci veritatis harum.",
    image_url:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categories: "Lunch",
    description:
      "Enjoy a satisfying lunch with a variety of options to choose from. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nemo explicabo repellendus necessitatibus adipisci veritatis harum.",
    image_url:
      "https://images.unsplash.com/photo-1627309302198-09a50ae1b209?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categories: "Dinner",
    description:
      "Delicious dinner recipes for a delightful evening. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nemo explicabo repellendus necessitatibus adipisci veritatis harum.",
    image_url:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categories: "Snack",
    description:
      "Quick and tasty snack ideas for when you need a little pick-me-up. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nemo explicabo repellendus necessitatibus adipisci veritatis harum.",
    image_url:
      "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categories: "Dessert",
    description:
      "Indulge in sweet treats with our delectable dessert recipes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nemo explicabo repellendus necessitatibus adipisci veritatis harum.",
    image_url:
      "https://images.unsplash.com/photo-1603384358453-e337643f75fa?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categories: "Appetizers",
    description:
      "Whet your appetite with a variety of flavorful appetizers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor nemo explicabo repellendus necessitatibus adipisci veritatis harum.",
    image_url:
      "https://images.unsplash.com/photo-1607098665874-fd193397547b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 5px;
  width: 100%;
  margin-top: 30px;
}
</style>

<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="accent-2"
    control-type="outline"
    navigation
    autoplay
    padding
    infinite
    arrows
    class="carousel text-primary rounded-borders"
  >
    <q-carousel-slide
      v-for="(item, index) in foodList"
      :key="index"
      :name="index"
      class="column no-wrap flex-center items-center justify-center"
    >
      <CardComponent
        :username="item.username"
        :description="item.description"
        :recipe="item.recipe"
        :url="item.url"
      ></CardComponent>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "./CardComponent.vue";

const foodList = ref([
  {
    username: "Julius's",
    recipe: "Caesar Salad",
    description:
      "Crisp romaine, parmesan, croutons, and tangy Caesar dressing.",
    url: "https://www.noracooks.com/wp-content/uploads/2022/06/vegan-caesar-salad-4.jpg",
  },
  {
    username: "Lue's",
    recipe: "Hamburger",
    description: "Juicy beef patty, lettuce, tomato, and a soft bun.",
    url: "https://cdn.britannica.com/31/122031-050-F8FCA663/Hamburger-cheeseburger.jpg",
  },
  {
    username: "Mike's",
    recipe: "Miso Soup",
    description: "Japanese broth with tofu, seaweed, and green onions.",
    url: "https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg",
  },
  {
    username: "Aaron's",
    recipe: "Ceviche",
    description: "Fresh seafood cured in citrus juices with herbs and spices.",
    url: "https://www.cookingclassy.com/wp-content/uploads/2020/09/ceviche-6.jpg",
  },
]);

const slide = ref(null);
</script>

<style lang="scss" scoped>
.carousel {
  min-height: 500px;
  height: auto;
  max-width: 750px;
  width: 90%;
  min-width: 300px;
}
</style>

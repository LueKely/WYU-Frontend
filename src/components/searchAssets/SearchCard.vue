<template>
  <div class="card--search">
    <div class="card--container__info">
      <h2 class="text-24 font-bold">{{ cardProps.name }}</h2>

      <h3 class="text-18 font-light">by {{ cardProps.author }}</h3>

      <hr style="color: #d6d6d6; width: 100%" />
      <p>{{ cardProps.description }}</p>
      <button class="btn--search font-bold" @click="visitRecipe">
        visit recipe
      </button>
    </div>

    <img
      class="card__image--search"
      src="https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg"
      spinner-color="white"
      aspect-ratio="2/3"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
//cardProps
const cardProps = defineProps({
  name: String,
  author: String,
  description: String,
  imgUrl: String,
  id: String,
});

function visitRecipe() {
  router.push(`recipe/${cardProps.id}`);
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="card--search">
    <div class="card--container__info">
      <h2 class="text-24 font-bold">{{ cardProps.recipe_name }}</h2>

      <h3 class="text-18 font-light">by {{ cardProps.username }}</h3>

      <hr style="color: #d6d6d6; width: 100%" />
      <p>{{ cardProps.description }}</p>
      <button class="btn--search font-bold" @click="visitRecipe">
        visit recipe
      </button>
    </div>

    <img
      class="card__image--search"
      :src="cardProps.image_url"
      spinner-color="white"
      aspect-ratio="2/3"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const cardProps = defineProps({
  recipe_name: String,
  username: String,
  description: String,
  image_url: String,
  _id: String,
});

function visitRecipe() {
  router.push({ name: "recipe", params: { id: cardProps._id } });
}
</script>

<style lang="scss" scoped></style>

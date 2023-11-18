<template>
  <div class="page--recent">
    <div class="container--recent">
      <h2 style="align-self: flex-start" class="text-32">Recent Posts</h2>
      <div class="card__container--recent">
        <div
          class="card__loop"
          v-for="(data, index) in recipeList"
          :key="index"
        >
          <WideCard :recipeData="data"></WideCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WideCard from "@recent/WideCard.vue";

import { reactive, ref, computed } from "vue";

const recipeData = reactive({
  username: "test123",
  recipe_name: "Caramel Spaghetti",
  image_url:
    "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  difficulty: "Medium",
  cooking_time: "30 - 45 minutes",
  tags: ["dinner", "protein"],
  description: "A classic Italian dish with a rich meat sauce.",
  ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onions", "Garlic"],
  createdAt: "2023-11-18T02:40:23.657Z",
});

const recipeList = ref([
  { ...recipeData },
  { ...recipeData },
  { ...recipeData },
]);
</script>

<style lang="scss" scoped></style>

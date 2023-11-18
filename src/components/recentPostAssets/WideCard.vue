<template>
  <div class="wide__container">
    <div class="user__container">
      <div class="user__container--info">
        <q-avatar color="primary" class="q-mr-sm" text-color="white">{{
          userInitials
        }}</q-avatar>
        <div class="user__container--text text-18">
          <p class="font-bold">{{ props.recipeData.username }}</p>
          <p>Created at: {{ props.recipeData.createdAt }}</p>
        </div>
      </div>
      <p class="text-accent text-18">See recipe</p>
    </div>
    <q-img :src="props.recipeData.image_url" alt="food" />
    <div>
      <h2 class="text-24 font-bold">{{ props.recipeData.username }}</h2>
      <div class="recent__tags">
        <div v-for="(tag, index) in props.recipeData.tags" :key="index">
          <q-chip class="q-mr-sm" color="primary" text-color="white">{{
            tag
          }}</q-chip>
        </div>
      </div>
      <p>Difficulty: {{ props.recipeData.difficulty }}</p>
      <p>Ingridients: {{ ingridientCount }}</p>
      <p>Estimated time: {{ props.recipeData.cooking_time }}</p>
      <p class="text-18">{{ props.recipeData.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

// const recipeData = reactive({
//   username: "test123",
//   recipe_name: "Caramel Spaghetti",
//   image_url:
//     "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   difficulty: "Medium",
//   cooking_time: "30 - 45 minutes",
//   tags: ["dinner", "protein"],
//   description: "A classic Italian dish with a rich meat sauce.",
//   ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onions", "Garlic"],
//   createdAt: "2023-11-18T02:40:23.657Z",
// });

const props = defineProps({
  recipeData: {
    type: Object,
    required: true,
  },
});

const userInitials = computed(() => {
  return props.recipeData.username.charAt(0);
});

const ingridientCount = computed(() => {
  return props.recipeData.ingredients.length;
});
</script>

<style lang="scss" scoped></style>

<!--
  {
	"status": "success",
	"message": "Recipes found",
	"data": [


}
 -->

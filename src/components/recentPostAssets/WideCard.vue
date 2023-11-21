<template>
  <div class="wide__container">
    <div class="user__container">
      <div class="user__container--info">
        <q-avatar
          color="primary"
          size="55px"
          class="q-mr-md"
          text-color="white"
          >{{ userInitials }}</q-avatar
        >
        <div class="user__container--text text-18">
          <p class="text-18 text-semibold">{{ props.recipeData.username }}</p>
          <p class="text-12 q-mt-sm">
            {{ props.recipeData.createdAt.split("T")[0] }}
          </p>
        </div>
      </div>
      <p class="text-accent-2 text-medium text-18 cursor-pointer">See recipe</p>
    </div>
    <q-img
      :src="props.recipeData.image_url"
      alt="food"
      style="border-radius: 10px"
    />
    <div clas="recipe__info">
      <div class="flex justify-between items-center">
        <h2 class="text-24 font-bold">{{ props.recipeData.recipe_name }}</h2>
        <div class="recent__tags">
          <div v-for="(tag, index) in props.recipeData.tags" :key="index">
            <q-chip class="q-mr-sm" color="primary" text-color="white">{{
              tag
            }}</q-chip>
          </div>
        </div>
      </div>
      <div class="metadata">
        <p>Difficulty: {{ props.recipeData.difficulty }}</p>
        <p>Ingridients: {{ ingridientCount }}</p>
        <p>Estimated time: {{ props.recipeData.cooking_time }}</p>
      </div>
      <div class="description">
        <p class="text-18">{{ props.recipeData.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

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

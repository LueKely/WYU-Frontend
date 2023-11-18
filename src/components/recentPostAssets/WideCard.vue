<template>
  <div class="wide__container">
    <div class="user__container">
      <div class="user__container--info">
        <q-avatar color="primary" class="q-mr-sm" text-color="white">{{
          userInitials
        }}</q-avatar>
        <div class="user__container--text text-18">
          <p class="font-bold">{{ props.recipeData.username }}</p>
          <p class="text-body2">
            {{ props.recipeData.createdAt.split("T")[0] }}
          </p>
        </div>
      </div>
      <p class="text-accent text-18">See recipe</p>
    </div>
    <q-img :src="props.recipeData.image_url" alt="food" />
    <div>
      <h2 class="text-24 font-bold">{{ props.recipeData.recipe_name }}</h2>
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

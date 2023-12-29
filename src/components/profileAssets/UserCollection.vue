<template>
  <div class="card--post__container">
    <PostCard v-for="post in message" :key="post" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import PostCard from "../profileAssets/PostCard.vue";
const message = inject("collections");
</script>

<style lang="scss" scoped>
.card--post__container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
</style>

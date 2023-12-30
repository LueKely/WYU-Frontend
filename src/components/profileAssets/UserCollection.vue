<template>
  <div v-if="props.savePosts?.length > 0" class="card--post__container">
    <PostCard v-for="post in props.savePosts" :key="post._id" :post="post" />
  </div>
  <div v-else class="empty-data flex flex-center">
    You don't have any bookmarked posts
  </div>
</template>

<script setup>
import PostCard from "../profileAssets/PostCard.vue";

const props = defineProps({
  savePosts: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card--post__container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.empty-data {
  width: 100%;
  padding: 36px 0;
}
</style>

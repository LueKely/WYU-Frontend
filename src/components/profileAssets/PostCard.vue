<template>
  <div class="container--post" @click="forwardToRecipe">
    <q-img
      class="rounded-borders"
      src="https://picsum.photos/500/300"
      width="230px"
      :ratio="16 / 9"
    />

    <div class="container--metadata">
      <!-- insert user name here -->
      <p>Test</p>
      <!-- meta data -->
      <div class="container--icons">
        <div class="">
          <span class="font text-12 q-mr-xs">11</span>
          <q-img
            loading="lazy"
            no-spinner
            src="../../assets/heart_filled.svg"
            width="15px"
          />
        </div>
        <div>
          <span class="font text-12 q-mr-xs">10</span>
          <q-img
            loading="lazy"
            no-spinner
            src="../../assets/save_filled.svg"
            width="15px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userPosts = defineProps({
  posts: Object,
});

console.log(userPosts.posts);
const forwardToRecipe = () => {
  console.log("forward to recipe");
};
</script>

<style lang="scss" scoped>
.container--icons {
  display: flex;
  gap: 0px 10px;
}
.rounded-borders {
  border-radius: 5px;
}
.container--metadata {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 0px;
  gap: 10px;
}
.container--post {
  cursor: pointer;
}
</style>

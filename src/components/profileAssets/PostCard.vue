<template>
  <div class="container--post" @click="forwardToRecipe(props.post._id)">
    <q-img
      class="rounded-borders"
      :src="props.post.image_url"
      width="230px"
      :ratio="16 / 9"
    />

    <div class="container--metadata">
      <!-- insert user name here -->
      <p>@{{ props.post.username }}</p>
      <!-- meta data -->
      <div class="container--icons">
        <div>
          <span class="font text-12 q-mr-sm">{{
            props.post.likes.length
          }}</span>
          <q-img
            loading="lazy"
            no-spinner
            src="../../assets/icons/heart_filled.svg"
            width="15px"
          />
        </div>
        <div>
          <span class="font text-12 q-mr-sm">{{
            props.post.saves.length
          }}</span>
          <q-img
            loading="lazy"
            no-spinner
            src="../../assets/icons/save_filled.svg"
            width="15px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  post: Object,
});

const forwardToRecipe = (recipeID) => {
  recipeID && router.push({ name: "recipe", params: { id: recipeID } });
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

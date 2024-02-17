<template>
  <div class="cursor-pointer" @click="forwardToRecipePage(props.post._id)">
    <q-img
      class="rounded-borders"
      :img-style="{ borderRadius: '5px' }"
      :src="props.post.image_url"
      width="230px"
      :ratio="16 / 9"
    />

    <div class="flex justify-between items-start q-mt-sm">
      <!-- insert user name here -->
      <p>@{{ props.post.username }}</p>
      <!-- meta data -->
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center q-mr-sm">
          <span class="font text-12 q-mr-xs block">{{
            props.post.likes.length
          }}</span>
          <HeartIcon type="filled" size="15" />
        </div>
        <div class="flex justify-center items-center">
          <span class="font text-12 q-mr-xs block">{{
            props.post.saves.length
          }}</span>
          <BookmarkIcon type="filled" size="15" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import HeartIcon from "../icons/HeartIcon.vue";
import BookmarkIcon from "../icons/BookmarkIcon.vue";

const router = useRouter();
const props = defineProps({
  post: Object,
});

const forwardToRecipePage = (recipeID) => {
  recipeID && router.push({ name: "recipe", params: { id: recipeID } });
};
</script>

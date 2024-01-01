<template>
  <div class="card__container cursor-pointer" @click="visitRecipe">
    <q-img
      :src="cardProps.payload.image_url"
      :ratio="16 / 9"
      loading="true"
      width="100%"
      height="150px"
    />
    <div class="card__container--text q-mt-md">
      <h4 class="text-18 font-bold">
        {{
          cardProps.payload.recipe_name
            ? cardProps.payload.recipe_name
            : cardProps.payload.categories
        }}
      </h4>
      <p class="card__text">
        {{ cardProps.payload.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";

const isRecipe = inject("isRecipe");
const router = useRouter();
const cardProps = defineProps({
  payload: Object,
});
console.log(cardProps.payload);
const visitRecipe = () => {
  if (isRecipe) {
    router.push({ name: "recipe", params: { id: cardProps.payload._id } });
    return;
  }
  router.push({
    name: "category",
    params: { category: cardProps.payload.categories.toLowerCase() },
  });
};
</script>

<style lang="scss" scoped>
.card__container {
  transition: all ease-out 100ms;
  background: #ffe2b8;
  border: 5px solid transparent;
  width: 250px;
  height: 290px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px;
  margin-inline: 10px;
}

.card__container:hover {
  transition: all ease-in 100ms;
  border: 5px solid rgb(238, 167, 60);
}
.card__container--text {
  // background-color: red;

  height: 100px;
  width: 100%;
}
.card__text {
  margin: 0;
  margin-top: 8px !important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

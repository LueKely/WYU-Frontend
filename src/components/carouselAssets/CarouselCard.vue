<template>
  <div class="card__container cursor-pointer" @click="visitRecipe">
    <q-img
      :src="cardProps.payload.image_url"
      :ratio="16 / 9"
      loading="true"
      width="100%"
      height="150px"
    />
    <div class="card__container__info q-mt-md">
      <h4 class="text-18 font-bold">
        {{
          cardProps.payload.recipe_name
            ? cardProps.payload.recipe_name
            : cardProps.payload.categories
        }}
      </h4>
      <p>
        {{ cardProps.payload.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";

const router = useRouter();
const isRecipe = inject("isRecipe");

const cardProps = defineProps({
  payload: Object,
});

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 250px;
  height: 290px;
  padding: 15px;
  margin-inline: 10px;
  border: 5px solid transparent;
  border-radius: 10px;
  background: #ffe2b8;
  transition: all ease-out 100ms;

  &:hover {
    border: 5px solid rgb(238, 167, 60);
    transition: all ease-in 100ms;
  }

  &__info {
    width: 100%;
    height: 100px;

    & > p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      margin-top: 8px !important;
      overflow: hidden;
    }
  }
}
</style>

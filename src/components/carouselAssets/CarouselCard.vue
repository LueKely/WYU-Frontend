<template>
  <div class="card__container">
    <q-img
      :src="cardProps.payload.imgUrl"
      :ratio="16 / 9"
      loading="true"
      width="100%"
      height="150px"
      @click="visitPage"
    />
    <div class="card__container--text q-mt-md">
      <h4 class="text-18 font-bold">{{ cardProps.payload.title }}</h4>
      <p class="card__text">
        {{ cardProps.payload.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject, onMounted } from "vue";

const isRecipe = inject("isRecipe");
const router = useRouter();

const visitPage = () => {
  if (isRecipe) {
    router.push(`/recipe/${cardProps.payload.pathUrl}`);
    return;
  }
  router.push(`category/${cardProps.payload.pathUrl}`);
};

// props for the card carousel:

//   title: String,
//   description: String,
//   imgUrl: String,
//   pathUrl: String,

const cardProps = defineProps({
  payload: Object,
});
</script>

<style lang="scss" scoped>
.card__container {
  background: #ffe2b8;
  width: 310px;
  height: 290px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px;
}
.card__container--text {
  // background-color: red;

  height: 100px;
  width: 100%;
}
.card__text {
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

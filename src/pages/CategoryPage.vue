<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page search">
      Test
      <q-inner-loading :showing="pageLoadingState" color="accent-2" />
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { GetRecipeByCategory } from "@composables/Recipe";
import { useRoute } from "vue-router";

/**
 * TODO: Mga need gawin
 * 1. UI for category page
 * 2. Direct to recipe page when click on recipe card, base on recipe ID
 */

const route = useRoute();
const pageLoadingState = ref(false);

const category = ref(route.params.category || "");
const recipeLists = ref([]);

onMounted(() => {
  pageLoadingState.value = true;
  GetRecipeByCategory({ category: category.value })
    .then((response) => {
      if (response.status === "success") {
        recipeLists.value = response.data ? response.data : [];
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      pageLoadingState.value = false;
    });
});
</script>

<style lang="scss" scoped>
.page--discover {
  width: 100%;
  height: 100%;

  background-color: rgb(230, 199, 199);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

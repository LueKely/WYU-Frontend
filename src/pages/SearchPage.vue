<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page page--search">
      <div class="container--search">
        <h3 class="font-bold">Search Results For: {{ $route.query.q }}</h3>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
onMounted(() => {
  console.log(router.query.q);
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="page">Search{{ $route.query.q }}</div>
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

<template>
  <div class="page--discover">
    <div class="container container-sections">
      <UlamOfTheDay></UlamOfTheDay>
      <section>Recent Posts</section>
      <section>Categories</section>
    </div>
  </div>
</template>

<script setup>
import UlamOfTheDay from "@discover/UlamOfTheDay.vue";
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
.container-sections {
  padding: 0;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}
</style>

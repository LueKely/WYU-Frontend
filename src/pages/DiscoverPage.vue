<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page--discover">
      <div class="container--sections">
        <UlamOfTheDay></UlamOfTheDay>
        <RecentPost></RecentPost>
        <CategoriesSection></CategoriesSection>
      </div>
    </div>
  </transition>
</template>

<script setup>
import UlamOfTheDay from "@discover/UlamOfTheDay.vue";
import RecentPost from "@discover/RecentPost.vue";
import CategoriesSection from "@discover/CategoriesSection.vue";
</script>

<style lang="scss" scoped></style>

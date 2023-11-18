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

<style lang="scss" scoped>
.page--discover {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container--sections {
  display: flex;
  align-items: center;
  justify-items: flex-start;
  flex-direction: column;
  padding: 30px 0px;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  box-shadow: 0px 0px 20px 0px rgba(206, 206, 206, 0.932);
}
</style>

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
        <q-btn
          class="create_btn"
          unelevated
          round
          color="primary"
          icon="add"
          size="20px"
          :to="{ name: 'create' }"
        />
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
.create_btn {
  position: fixed;
  bottom: 20px;
  right: 50px;
  z-index: 100;
}
</style>

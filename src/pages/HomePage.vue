<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="main-page">
      <NavigationBar />
      <div class="main-page__home">
        <router-view></router-view>
      </div>
    </div>
  </transition>
</template>

<script setup>
import NavigationBar from "@partials/NavigationBar.vue";
</script>

<style lang="scss" scoped>
.main-page {
  position: relative;
}
</style>

<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="main-page relative">
      <NavigationBar />
      <div class="main-page__home">
        <router-view></router-view>
      </div>
    </div>
  </transition>
</template>

<script setup>
import NavigationBar from "../layouts/partials/NavigationBar.vue";
</script>

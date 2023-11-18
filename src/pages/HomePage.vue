<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page page--home">
      <nav>Navigation</nav>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  height: 60px;
}
.page--home {
  flex-direction: column;
}
</style>

<template>
  <div class="page page--home">
    <nav>Navigation</nav>
    <router-view></router-view>
  </div>
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

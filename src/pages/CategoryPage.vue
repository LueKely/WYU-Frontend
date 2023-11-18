<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page--discover">TEST</div>
  </transition>
</template>

<script setup></script>

<style lang="scss" scoped>
.page--discover {
  width: 100%;
  height: 100%;

  background-color: rgb(230, 199, 199);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

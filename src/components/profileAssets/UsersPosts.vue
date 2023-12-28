<template>
  <div>Posts</div>
  <div>{{ message }}</div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("userPosts");
</script>

<style lang="scss" scoped></style>

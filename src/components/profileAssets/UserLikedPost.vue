<template>
  <div>liked posts</div>
  <div>{{ message }}</div>
</template>

<script setup>
import { inject } from "vue";
const message = inject("collections");
</script>

<style lang="scss" scoped></style>

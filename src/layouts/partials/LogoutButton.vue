<template>
  <div class="q-ml-sm">
    <q-btn
      class="col"
      rounded
      outline
      color="primary"
      label="Logout"
      push
      @click="logout"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { LocalStorage } from "quasar";
const router = useRouter();
// create a function that will clear all the local storage and redirect to login page
const logout = () => {
  LocalStorage.clear();
  window.location.reload();
};
</script>

<style lang="scss" scoped></style>

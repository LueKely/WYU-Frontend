<template>
  <div class="q-ml-sm">
    <q-btn-dropdown
      color="accent"
      icon="settings"
      outline
      class="text-10"
      dense
      fab-mini
    >
      <div class="column items-center justify-center q-pa-md q-gutter-y-sm">
        <q-btn
          outline
          color="primary"
          label="Edit Profile"
          push
          class="col"
          v-close-popup
        />
        <q-btn
          class="col"
          outline
          color="primary"
          label="Logout"
          push
          v-close-popup
          @click="logout"
        />
      </div>
    </q-btn-dropdown>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// create a function that will clear all the local storage and redirect to login page
const logout = () => {
  localStorage.clear();
  router.push("/login");
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      color="accent"
      label="Account Settings"
      outline
      class="text-12"
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

<template>
  <div>icon</div>
  <h4>Sign in</h4>
  <q-form ref="form" greedy @submit="login">
    <q-input
      class="font"
      rounded
      outlined
      v-model="email"
      label="Email"
      type="email"
      lazy-rules
      :rules="[(val) => !!val || 'Password is required']"
    />
    <q-input
      class="font"
      rounded
      outlined
      v-model="password"
      label="Password"
      type="password"
      lazy-rules
      :rules="[(val) => !!val || 'Password is required']"
    />
    <q-btn type="submit" label="Login" />
  </q-form>
</template>

<script setup lang="js">
import { ref } from 'vue';
const form = ref(null);
const email = ref('');
const password = ref('');
</script>

<style lang="scss" scoped></style>

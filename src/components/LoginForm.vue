<template>
  <div class="column items-center justify-center q-mb-xl">
    <q-icon class="q-my-lg" name="img:/wyu-icon.svg" size="10rem" />
    <h4 class="q-my-lg">Sign in</h4>
  </div>

  <q-form ref="form" greedy @submit="login">
    <label for="username" class="font text-18 q-mb-sm">Username/Email</label>
    <q-input
      id="username"
      class="font q-mb-sm"
      outlined
      v-model="email"
      type="email"
      lazy-rules
      :rules="[(val) => !!val || 'username is required']"
    />
    <label for="password" class="font text-18 q-mb-sm">Password</label>
    <q-input
      id="password"
      class="font q-mb-sm"
      outlined
      v-model="password"
      type="password"
      lazy-rules
      :rules="[(val) => !!val || 'Password is required']"
    />
    <q-btn
      color="accent"
      size="lg"
      class="font-bold q-my-sm login__button"
      type="submit"
      label="Login"
    />
    <q-btn
      color="primary"
      outline
      size="lg"
      class="font-bold q-my-sm login__button login--signup"
      label="Sign Up"
    />
  </q-form>
</template>

<script setup lang="js">
import { ref } from 'vue';
const form = ref(null);
const email = ref('');
const password = ref('');
</script>

<style lang="scss" scoped>
.login__button {
  width: 100%;
}
.login--signup {
  border-color: red;
}
</style>

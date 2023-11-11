<template>
  <div class="column items-center justify-center q-mb-lg">
    <q-icon class="q-my-lg" name="img:/wyu-icon.svg" size="8rem" />
    <h4 class="q-my-md">Sign in</h4>
  </div>

  <div v-if="loginError" class="text-18 text-center text-negative q-mb-md">
    {{ loginError }}
  </div>

  <q-form ref="form" greedy @submit="login">
    <label for="username" class="font text-18 q-mb-sm">Username/Email</label>
    <q-input
      @focus="clearError"
      id="login_identifier"
      class="font q-mb-sm"
      outlined
      v-model="loginIdentifier"
      type="text"
      lazy-rules
      :rules="[(val) => !!val || 'username/email is required']"
    />
    <label for="password" class="font text-18 q-mb-sm">Password</label>
    <q-input
      @focus="clearError"
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
      :loading="btnLoadingState"
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
import { ref } from "vue";
import { LoginUser } from "../composables/Authentication";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref(null);
const loginIdentifier = ref("test123");
const password = ref("testest");
let loginError = ref('');
let btnLoadingState = ref(false);

const login = () => {
  btnLoadingState.value = true;
  loginError.value = null;
  form.value.validate().then((succcess) => {
    if (succcess) {
      const userData = {
        login_identifier: loginIdentifier.value,
        password: password.value,
      };

      LoginUser(userData)
        .then((response) => {
          if (response.status === "success") {
            router.push( { name: 'whatsYourUlam' } )
          }
        })
        .catch((error) => {
          console.log(error);
          loginError.value = 'Incorrect username/email or password'
        })
        .finally(() => {
          btnLoadingState.value = false;
        });
    }
  });
};

const clearError = () => {
  loginError.value = null;
}
</script>

<style lang="scss" scoped>
.login__button {
  width: 100%;
}
.login--signup {
  border-color: red;
}
</style>

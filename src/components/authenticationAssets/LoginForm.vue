<template>
  <div class="column items-center justify-center q-my-lg">
    <q-avatar size="120px" square>
      <q-img src="/wyu-icon.svg" fit="cover"></q-img>
    </q-avatar>
    <h4 class="q-my-sm">Sign in</h4>
  </div>
  <div class="error q-mb-md">
    <div
      v-if="loginError"
      class="text-18 text-center text-negative"
      style="height: 1rem"
    >
      {{ loginError }}
    </div>
  </div>

  <q-form ref="form" @submit="login">
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
      size="lg"
      class="text-bold q-my-sm login-btn full-width"
      style="background-color: #ffb74d"
      type="submit"
      label="Login"
      unelevated
      :loading="btnLoadingState"
      :disable="isDisabled"
    />
    <q-btn
      color="accent-0"
      outline
      size="lg"
      class="text-bold q-my-sm full-width login--signup"
      label="Sign Up"
      @click="$router.push({ name: 'register' })"
    />
  </q-form>
</template>

<script setup lang="js">
import { ref, computed } from "vue";
import { LocalStorage } from "quasar";
import { useRouter } from "vue-router";

import { LoginUser } from "../../composables/Authentication";
import { useUserStore } from "../../stores/userStore";


const router = useRouter();
const userStore = useUserStore();

let loginError = ref('');
let btnLoadingState = ref(false);

const form = ref(null);
const loginIdentifier = ref("");
const password = ref("");

const isDisabled = computed(() => {
  return !loginIdentifier.value || !password.value;
});

const clearError = () => {
  loginError.value = null;
}

const login = () => {
  btnLoadingState.value = true;
  loginError.value = null;

  form.value.validate().then((succcess) => {
    if (succcess) {
      const payload = {
        login_identifier: loginIdentifier.value,
        password: password.value,
      };

      LoginUser(payload)
        .then((response) => {
          if (response.status === "success") {
            LocalStorage.set("Bearer", response.data.token);
            LocalStorage.set("c_user", response.data.userData);
            userStore.setUser(response.data.userData);
            userStore.setToken(response.data.token)
            if(userStore.getToken){
              router.push({ name: "discover" });
            }
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
</script>

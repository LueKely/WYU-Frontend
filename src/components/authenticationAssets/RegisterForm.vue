<template>
  <div class="page">
    <q-form ref="form" @submit="onSubmit" class="register__container">
      <div class="register__container--header q-mb-xl">
        <q-avatar size="130px" square>
          <q-img src="/wyu-icon.svg" fit="cover"></q-img>
        </q-avatar>
        <h1 class="text-bold text-32 q-mt-md">Register</h1>
      </div>
      <div class="row register__container--fields">
        <q-input
          v-model="first_name"
          :rules="[(val) => !!val || 'Required*']"
          label="First Name"
          class="q-mr-sm"
        />
        <q-input
          v-model="last_name"
          :rules="[(val) => !!val || 'Required*']"
          label="Last Name"
        />
      </div>

      <q-input
        v-model="username"
        :rules="[(val) => !!val || 'Required*']"
        label="Username"
      />
      <q-input
        v-model="email"
        label="Email"
        :rules="[
          (val) => emailRegex.test(val) || 'Invalid email',
          (val) => !!val || 'Required*',
        ]"
      />

      <q-input
        rounded
        bottom-slots
        v-model="password"
        label="Password"
        type="password"
        counter
        :rules="[
          (val) => val.length >= 7 || 'Please enter atleast 8 characters',
        ]"
      >
        <template v-slot:hint> Must be atleast 8 characters long </template>
      </q-input>
      <div class="register__container--buttons q-mt-sm">
        <q-btn
          label="Sign Up"
          type="submit"
          color="accent"
          :disabled="isDisabled"
          class="q-ma-sm full-width"
          :loading="btnLoadingState"
        />

        <q-btn
          label="Sign In"
          type="submit"
          class="q-ma-sm full-width"
          @click="router.push({ name: 'login' })"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import { RegisterUser } from "../../composables/Authentication";

import Notification from "../../composables/Notification";

const $q = useQuasar();
const router = useRouter();

let btnLoadingState = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const form = ref({});
const username = ref("");
const email = ref("");
const password = ref("");
const first_name = ref("");
const last_name = ref("");

const payload = computed(() => {
  return {
    username: username.value,
    email: email.value,
    password: password.value,
    first_name: first_name.value,
    last_name: last_name.value,
  };
});

const isDisabled = computed(() => {
  return (
    !username.value ||
    !email.value ||
    !password.value ||
    !first_name.value ||
    !last_name.value
  );
});

const onSubmit = () => {
  btnLoadingState.value = true;
  form.value.validate().then((success) => {
    if (success) {
      payload.value.user_level = "user";
      RegisterUser(payload.value)
        .then((response) => {
          if (response.status === "success") {
            Notification.success($q, "Registration Successful");
            router.push("/login");
          }
        })
        .catch((error) => {
          console.log(error);
          Notification.error($q, "An Error has occured");
        })
        .finally(() => {
          btnLoadingState.value = false;
        });
    }
  });
};
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  place-items: center;

  height: 100vh;

  .register__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 90vh;

    padding: 20px 40px;

    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(116, 116, 116, 0.5);

    & > * {
      width: 100%;
    }

    &--header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
    }

    &--fields {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      & > * {
        width: 48%;
      }
    }

    &--buttons {
      display: flex;
      gap: 16px;

      width: 100%;
      height: 100%;
    }
  }
}
</style>

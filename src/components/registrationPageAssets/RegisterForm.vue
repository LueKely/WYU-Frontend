<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const username = ref("");
const email = ref("");
const password = ref("");
const first_name = ref("");
const last_name = ref("");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const router = useRouter();
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

function onSubmit() {
  console.log(payload.value);
  router.push("/login");
}
</script>

<template>
  <div class="page">
    <q-form @submit="onSubmit" class="register__container">
      <div class="register__text q-mb-xl">
        <q-avatar size="150px" square>
          <q-img src="/wyu-icon.svg" fit="cover"></q-img>
        </q-avatar>
        <h1 class="font-bold text-32">Register</h1>
      </div>
      <div class="row name__container">
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
        label="email"
        :rules="[
          (val) => emailRegex.test(val) || 'Invalid email',
          (val) => !!val || 'Required*',
        ]"
      />

      <q-input
        rounded
        bottom-slots
        v-model="password"
        label="password"
        counter
        :rules="[
          (val) => val.length >= 7 || 'Please enter atleast 8 characters',
        ]"
      >
        <template v-slot:hint> Must be atleast 8 characters long </template>
      </q-input>
      <div class="btn--register">
        <q-btn
          label="Submit"
          type="submit"
          color="accent"
          :disabled="isDisabled"
          class="q-ma-sm btn"
        />
      </div>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.register__container {
  background-color: #ffffff;
  width: 500px;
  height: 80dvh;

  box-shadow: 0 0 5px rgba(116, 116, 116, 0.5);
  border-radius: 10px;

  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
}
.register__container > * {
  width: 100%;
}
.name__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.register__text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.name__container > * {
  width: 48%;
}
.btn--register {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .btn {
    width: 100%;
  }
}
</style>

<template>
  <q-page class="page q-pa-xl">
    <!-- form -->
    <div class="login login--form">
      <LoginForm></LoginForm>
    </div>

    <!-- carousel -->
    <div class="login login--carousel">carousel</div>
  </q-page>
</template>

<script setup lang="js">
import LoginForm from 'src/components/LoginForm.vue';
</script>

<style lang="scss" scoped>
.page {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page--login {
  padding: 20px;
}
.login {
  padding: 15px;
  border-radius: 15px;
}
.login--form {
  margin-right: 10px;
  height: 100%;
  background-color: rgb(206, 160, 160);
  flex: 1;
}
.login--carousel {
  margin-left: 10px;
  height: 100%;
  background-color: rgb(145, 145, 231);
  flex: 2;
}
</style>

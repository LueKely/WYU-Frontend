<template>
  <q-page class="page page--login q-pa-xl">
    <!-- form -->
    <div class="login login--form shadow-3">
      <LoginForm></LoginForm>
    </div>

    <!-- carousel -->
    <div class="login login--carousel shadow-3">carousel</div>
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
  position: relative;
  background-image: linear-gradient(
    to right bottom,
    #f2d366,
    #f6bd50,
    #f9a63f,
    #fc8d35,
    #fd7133
  );
}

.page--login::after {
  content: "";
}
.login {
  padding: 15px;
  border-radius: 15px;
  background-color: white;
}

.login--form {
  height: 100%;
  width: 100%;
  flex: 0.5;
  margin-right: 10px;
}
.login--carousel {
  margin-left: 10px;
  height: 100%;
  flex: 2;
}
</style>

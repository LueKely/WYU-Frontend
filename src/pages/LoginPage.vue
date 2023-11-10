<template>
  <q-page class="page page--login">
    <!-- form -->
    <div class="login login--form shadow-3">
      <LoginForm></LoginForm>
    </div>

    <!-- carousel -->
    <div
      class="login login--carousel shadow-3 column items-center justify-center"
    >
      <div class="text-center">
        <h4>What's Your <span class="text-accent">Ulam</span></h4>
        <p class="text-primary">Discover.Cook.Share: Anong Ulam Mo?</p>
      </div>
      <FoodCarousel></FoodCarousel>
    </div>
  </q-page>
</template>

<script setup lang="js">
import FoodCarousel from 'src/components/FoodCarousel.vue';
import LoginForm from 'src/components/LoginForm.vue';
</script>

<style lang="scss" scoped>
.page {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.page--login {
  position: relative;
  background-color: hsla(24, 100%, 80%, 1);
  background-image: radial-gradient(
      at 33% 3%,
      hsla(22, 100%, 69%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 10% 18%, hsla(32, 95%, 84%, 1) 0px, transparent 50%),
    radial-gradient(at 7% 87%, hsla(13, 91%, 71%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 93%, hsla(184, 83%, 69%, 1) 0px, transparent 50%),
    radial-gradient(at 68% 87%, hsla(35, 94%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 94% 44%, hsla(17, 88%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 39% 38%, hsla(38, 67%, 65%, 1) 0px, transparent 50%);
}

.page--login::after {
  content: "";
}
.login {
  padding: 10px 10px;
  border-radius: 15px;
  background-color: white;
}

.login--form {
  height: 100%;
  width: 100%;
  flex: 1;
  margin-right: 40px;
  padding: 0px 40px;
}
.login--carousel {
  margin-left: 40px;
  height: 100%;
  flex: 2;
}
</style>

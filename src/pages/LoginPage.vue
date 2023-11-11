<template>
  <q-page class="page page--login">
    <div class="container">
      <!-- form -->
      <div class="login login--form shadow-3">
        <LoginForm></LoginForm>
      </div>

      <!-- carousel -->
      <div
        class="login login--carousel shadow-3 column items-center justify-center"
      >
        <div class="text-center q-mb-xl">
          <h2>What's Your <span class="text-accent">Ulam</span></h2>
          <h5 class="text-primary">
            Discover.Cook.Share: Anong <span class="text-accent">Ulam</span> Mo?
          </h5>
        </div>
        <FoodCarousel></FoodCarousel>
      </div>
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
}

.page--login {
  position: relative;
  background-color: #fef8a9;
  background-image: radial-gradient(
      at 26% 60%,
      hsla(25, 91%, 59%, 1) 0,
      hsla(25, 91%, 59%, 0) 50%
    ),
    radial-gradient(
      at 49% 25%,
      hsla(262, 88%, 65%, 1) 0,
      hsla(262, 88%, 65%, 0) 50%
    ),
    radial-gradient(
      at 43% 17%,
      hsla(342, 87%, 66%, 1) 0,
      hsla(342, 87%, 66%, 0) 50%
    ),
    radial-gradient(
      at 31% 26%,
      hsla(345, 94%, 70%, 1) 0,
      hsla(345, 94%, 70%, 0) 50%
    ),
    radial-gradient(
      at 81% 55%,
      hsla(297, 88%, 68%, 1) 0,
      hsla(297, 88%, 68%, 0) 50%
    ),
    radial-gradient(
      at 70% 95%,
      hsla(197, 86%, 59%, 1) 0,
      hsla(197, 86%, 59%, 0) 50%
    ),
    radial-gradient(
      at 91% 14%,
      hsla(12, 91%, 59%, 1) 0,
      hsla(12, 91%, 59%, 0) 50%
    );
  z-index: 1;
}
.container::before {
  opacity: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  z-index: -1;

  background-image: url("./src/assets/texture.png");
  background-repeat: repeat;
  background-size: contain;
}
.container {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 25px;

  background-size: contain;
  background-repeat: repeat;
  padding: 25px;
}

.login {
  border-radius: 15px;
  background-color: white;
}

.login--form {
  padding-inline: 40px;
  height: 100%;
  width: 100%;

  max-width: 400px;
}
.login--carousel {
  height: 100%;
  width: 100%;
  max-width: 750px;
}
</style>

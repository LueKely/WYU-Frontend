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

<style lang="scss" scoped></style>

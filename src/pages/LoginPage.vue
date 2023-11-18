<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="page page--login">
      <div class="container">
        <!-- form -->
        <div class="login login--form shadow-3">
          <LoginForm></LoginForm>
        </div>

        <!-- carousel -->
        <div
          class="login login--carousel shadow-3 column no-wrap items-center justify-center"
        >
          <div class="text-center q-mt-lg q-mb-xl">
            <h3>What's Your <span class="text-accent">Ulam</span></h3>
            <h6 class="text-primary">
              Discover.Cook.Share: Anong
              <span class="text-accent">Ulam</span> Mo?
            </h6>
          </div>
          <FoodCarousel></FoodCarousel>
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script setup lang="js">
import FoodCarousel from 'src/components/FoodCarousel.vue';
import LoginForm from 'src/components/LoginForm.vue';
</script>

<style lang="scss" scoped></style>

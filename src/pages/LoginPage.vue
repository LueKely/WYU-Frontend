<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <q-page class="login gr-bg">
      <div class="login__container">
        <!-- form -->
        <div class="login__container--form bg-white shadow-3">
          <LoginForm></LoginForm>
        </div>

        <!-- carousel -->
        <div
          class="login__container--carousel bg-white shadow-3 column no-wrap items-center justify-center"
        >
          <div class="text-center q-mt-lg q-mb-xl">
            <h3>What's Your <span class="text-accent-2">Ulam</span></h3>
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
import FoodCarousel from '../components/FoodCarousel.vue';
import LoginForm from '../components/authenticationAssets/LoginForm.vue';
</script>

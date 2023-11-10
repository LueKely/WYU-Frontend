<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="accent"
    control-type="outline"
    navigation
    autoplay
    padding
    infinite
    arrows
    height="500px"
    class="text-primary rounded-borders"
  >
    <q-carousel-slide name="style" class="column no-wrap flex-center">
      <div class="">
        <CardComponent
          username="Lue's"
          description="kill yourself NOW"
          recipe="adobo"
          url="https://www.eatwithcarmen.com/wp-content/uploads/2022/09/chicken-adobo_.jpg"
        ></CardComponent>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
      <div class="">
        <CardComponent
          username="Lue's"
          description="kill yourself NOW"
          recipe="adobo"
          url="https://www.eatwithcarmen.com/wp-content/uploads/2022/09/chicken-adobo_.jpg"
        ></CardComponent>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="layers" class="column no-wrap flex-center">
      <div class="">
        <CardComponent
          username="Lue's"
          description="kill yourself NOW"
          recipe="adobo"
          url="https://www.eatwithcarmen.com/wp-content/uploads/2022/09/chicken-adobo_.jpg"
        ></CardComponent>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="map" class="column no-wrap flex-center">
      <div class="">
        <CardComponent
          username="Lue's"
          description="kill yourself NOW"
          recipe="adobo"
          url="https://www.eatwithcarmen.com/wp-content/uploads/2022/09/chicken-adobo_.jpg"
        ></CardComponent>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "./CardComponent.vue";

const slide = ref(null);
</script>

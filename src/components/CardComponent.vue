<template>
  <q-card class="q-pa-sm" style="width: 320px" flat bordered>
    <q-img :ratio="4 / 3" :src="prop.url" />

    <q-card-section>
      <div class="text-overline text-orange-9">{{ prop.username }}</div>
      <div class="text-h6 q-mb-xs">{{ prop.recipe }}</div>
      <q-card-section class="q-pt-none q-px-none text-caption text-grey">
        {{ prop.description }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="js">
const prop = defineProps({
  url: String,
  username: String,
  recipe:String,
  description: String,


});
</script>

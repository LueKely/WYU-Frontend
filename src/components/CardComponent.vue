<template>
  <div class="">
    <q-card class="my-card q-pa-sm" flat bordered>
      <q-img :src="prop.url" />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ prop.username }}</div>
        <div class="text-h6 q-mb-xs">{{ prop.recipe }}</div>
        <div class="text-caption text-grey">
          {{ prop.description }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="js">
const prop = defineProps({
  url: String,
  username: String,
  recipe:String,
  description: String,


});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  min-width: 250px;
}
</style>

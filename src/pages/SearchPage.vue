<template>
  <div class="page page--search">
    <div class="container--search">
      <div class="search__container--text">
        <h3 class="font-bold text-32">Search</h3>
        <h4 class="text-18">results for: "{{ $route.query.q }}"</h4>
      </div>
      <hr style="width: 100%; color: #f7f2f2; margin-bottom: 10px" />
      <div class="result__container">
        <!-- if empty result from fetching -->
        <div v-if="isEmpty" class="results--error">
          <h3 class="text-24">No results Found</h3>
          <p>
            Looks like we don't have what you are looking for <br />
            how about you create the recipe and share it with the world
          </p>
        </div>

        <div class="card__container--search">
          <div v-for="i in 10" :key="i">
            <SearchCard v-bind="propTest"></SearchCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import SearchCard from "../components/searchAssets/SearchCard.vue";
const router = useRoute();

const dummyData = ref([12]);
const isEmpty = computed(() => dummyData.value.length == 0);
const propTest = reactive({
  name: "Sinigeng",
  author: "Lue",
  description:
    "korem ipsum dolor sit amet consectetur adipisicing elit korem ipsum dolor sit amet consectetur adipisicing elit korem ipsum dolor sit amet consectetur adipisicing elit ko",
  imgUrl:
    "https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg",
  id: "123",
});

onMounted(() => {
  console.log(router.query.q);
});
</script>

<style lang="scss" scoped></style>

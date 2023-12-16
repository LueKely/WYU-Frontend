<template>
  <div class="page page--search">
    <div class="container--search">
      <div class="search__container--text">
        <h3 class="font-bold text-32">Search</h3>
        <h4 class="text-18">results for: "{{ $route.query.q }}"</h4>
      </div>
      <hr style="width: 100%; color: #f7f2f2" />
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
          <div class="card--search">
            <img src="" alt="" />
            <h2 class="text-24 font-bold">Card Title</h2>
            <span
              ><h3 class="text-18">Author</h3>
              <button class="18">like btn</button>
              <button>bookmark btn</button>
            </span>
            <hr style="color: white" />
            <p class="text-18">description</p>
            <button>Call to action</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();

const dummyData = ref([12]);
const isEmpty = computed(() => dummyData.value.length == 0);

onMounted(() => {
  console.log(router.query.q);
});
</script>

<style lang="scss" scoped></style>

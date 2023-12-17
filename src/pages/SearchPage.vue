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
            <div class="card--container__info">
              <h2 class="text-24 font-bold">Card Title</h2>
              <span class="card__container__info--author"
                ><h3 class="text-18 font-light">Author</h3>
                <span>
                  <button class="18">L</button>
                  <button>b</button>
                </span>
              </span>
              <hr style="color: #d6d6d6" />
              <p class="text-10">description</p>
              <button>Call to action</button>
            </div>

            <img
              class="card__image--search"
              src="https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg"
              spinner-color="white"
              aspect-ratio="2/3"
            />
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

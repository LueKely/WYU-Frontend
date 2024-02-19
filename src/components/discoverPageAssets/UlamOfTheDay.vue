<template>
  <section>
    <div v-if="!pageLoadingState" class="ulam__container q-mt-sm">
      <q-img
        width="100%"
        class="ulam__image"
        :src="ulamOfTheDay?.image_url"
        alt="ulam of the
      day image"
        :ratio="4 / 2"
      />
      <div class="ulam__container__contents">
        <!-- ulam description -->
        <div class="ulam__container__contents--info">
          <h4 class="text-secondary text-24">@{{ ulamOfTheDay?.username }}</h4>
          <h3 class="text-secondary font-bold text-43">
            {{ ulamOfTheDay?.recipe_name }}
          </h3>
        </div>
        <!-- ulam call to action -->
        <div class="ulam__container__contents--buttons">
          <!-- svg gaming -->
          <div class="ulam__container__contents--buttons__heart">
            <p class="text-24 text-secondary">
              {{ ulamOfTheDay?.likes }}
            </p>

            <HeartIcon type="filled" size="25" />
          </div>

          <button
            class="ulam__container__contents--visit-btn q-mr-sm text-18 text-secondary cursor-pointer"
            @click="
              router.push({
                name: 'recipe',
                params: { id: ulamOfTheDay?._id },
              })
            "
          >
            Visit recipe
          </button>
        </div>
      </div>
      <div class="ulam__gradient"></div>
    </div>
    <q-inner-loading :showing="pageLoadingState" color="accent-2" />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { GetAllRecipe } from "../../composables/Recipe";

import HeartIcon from "../icons/HeartIcon.vue";

const router = useRouter();
let pageLoadingState = ref(false);

const ulamOfTheDay = ref(null);

onMounted(() => {
  pageLoadingState.value = true;
  GetAllRecipe()
    .then((response) => {
      if (response.status === "success") {
        const mostLikedRecipe = response.data
          .map((recipe) => {
            return {
              ...recipe,
              likes: recipe.likes.length,
            };
          })
          .sort((a, b) => {
            return b.likes - a.likes;
          })[0];

        ulamOfTheDay.value = mostLikedRecipe;
        pageLoadingState.value = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  .ulam__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    margin-top: 75px;

    &__contents {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;

      padding: 35px 45px;

      z-index: 2;

      &--info {
        color: white;
      }

      &--buttons {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        &__heart {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 2px;

          p {
            margin: 0 5px 0 0;
          }
        }
      }

      &--visit-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        margin: 0px;
        padding: 5px 15px;

        background: none;

        border-radius: 50px;
        border: 1px solid white;

        transition: all 0.1s ease-in-out;

        &:hover {
          background-color: #ffb74d;
        }
      }
    }

    .ulam__gradient {
      position: absolute;

      width: 100%;
      height: 100%;

      z-index: 1;

      background: linear-gradient(
        0deg,
        rgba(48, 45, 45, 1) 1%,
        rgba(11, 10, 10, 0.5746499283307073) 23%,
        rgba(11, 10, 10, 0) 58%
      );
    }
  }
}
</style>

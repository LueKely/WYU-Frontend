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
      <div class="ulam__actions">
        <!-- ulam description -->
        <div class="ulam__info">
          <h4 class="text-secondary text-24">@{{ ulamOfTheDay?.username }}</h4>
          <h3 class="text-secondary font-bold text-43">
            {{ ulamOfTheDay?.recipe_name }}
          </h3>
        </div>
        <!-- ulam call to action -->
        <div class="ulam__buttons">
          <!-- svg gaming -->
          <div class="heart--container">
            <p class="text-24 text-secondary">
              {{ ulamOfTheDay?.likes }}
            </p>

            <svg
              class="q-mr-sm"
              width="25"
              height="25"
              viewBox="0 0 72 72"
              fill="#FF7878"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.9863 66.6128L30.9859 66.6124L30.9549 66.5817C21.6933 57.4282 14.0274 49.8518 8.67178 42.7152C3.31406 35.5759 0.29291 28.9079 0.29291 21.5804C0.29291 9.63289 8.897 0.29291 19.8 0.29291C25.9655 0.29291 31.8953 3.42273 35.7692 8.38088L36 8.6763L36.2308 8.38088C40.1047 3.42273 46.0345 0.29291 52.2 0.29291C63.103 0.29291 71.7071 9.63289 71.7071 21.5804C71.7071 28.9079 68.6859 35.5759 63.3282 42.7202C57.9911 49.8368 50.36 57.395 41.1418 66.5251L41.0145 66.6512L41.0139 66.6518L36.0008 71.5882L30.9863 66.6128Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>

          <button
            class="button--ulam q-mr-sm text-18 text-secondary cursor-pointer"
          >
            Visit recipe
            <div
              class="filter cursor-pointer"
              @click="
                router.push({
                  name: 'recipe',
                  params: { id: ulamOfTheDay?._id },
                })
              "
            ></div>
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
import { GetAllRecipe } from "@composables/Recipe";

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
}
.heart--container {
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  p {
    margin: 0 5px 0 0;
  }
  svg {
    margin: 0;
  }
}

.filter {
  transition: all 0.3s ease-in-out;
  right: 100%;
  z-index: 100;
  position: absolute;
  width: 100%;
  backdrop-filter: invert(100%);
  height: 100%;

  // border-radius: 50px;
}
.button--ulam {
  margin: 0px;
  appearance: none;
  overflow: hidden;
  position: relative;

  transition: all 0.3s ease-in-out;
  background: none;

  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  background-clip: padding-box;
  box-sizing: border-box;
}

.button--ulam:hover > .filter {
  right: 0;
  transition: all 0.2s ease-in-out;
}

.ulam__container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 75px;
}

.ulam__gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  // background: rgb(48, 45, 45);
  background: linear-gradient(
    0deg,
    rgba(48, 45, 45, 1) 1%,
    rgba(11, 10, 10, 0.5746499283307073) 23%,
    rgba(11, 10, 10, 0) 58%
  );
  z-index: 1;
}

.ulam__actions {
  z-index: 2;
  padding: 35px 45px;
  left: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.ulam__buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.ulam__info > {
  color: #ffffff;
}
</style>

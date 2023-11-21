<template>
  <div class="recipe-page">
    <div v-if="!pageLoadingState" class="recipe-page__container">
      <div class="recipe-page__container__img">
        <q-img
          style="border-radius: 10px"
          width="100%"
          class="ulam__image"
          :src="recipeData.image_url"
          alt="ulam of the
      day image"
        />
        <div class="interactions flex q-gutter-md q-mt-xs items-center q-mb-sm">
          <div class="heart">
            <q-img
              loading="lazy"
              no-spinner
              src="../assets/heart_filled.svg"
              width="30px"
            />
            <span class="block text-center text-12 q-mt-xs">24k</span>
          </div>
          <div>
            <q-img
              loading="lazy"
              no-spinner
              src="../assets/save_filled.svg"
              width="30px"
            />
            <span class="block text-center text-12 q-mt-xs">25k</span>
          </div>
        </div>
      </div>
      <div class="recipe-page__container__recipe-information">
        <!-- Title and Tags -->
        <div class="flex justify-between items-center q-mt-md">
          <h2 class="text-24 text-semibold">{{ recipeData.recipe_name }}</h2>
          <div class="flex q-gutter-xs">
            <div v-for="(tag, index) in recipeData.tags" :key="index">
              <q-chip color="primary" text-color="white">{{ tag }}</q-chip>
            </div>
          </div>
        </div>

        <!-- Metadata -->
        <div class="flex column q-mt-sm">
          <p class="text-18 text-medium">
            Difficulty: {{ recipeData.difficulty }}
          </p>
          <p class="text-18 text-medium">
            Cooking Time: {{ recipeData.cooking_time }} minutes
          </p>
          <p class="text-18 text-thin q-mt-sm">
            {{ recipeData.description }}
          </p>
        </div>

        <!-- Ingredients -->
        <div class="q-mt-md">
          <h2 class="text-24 text-semibold q-mb-sm">Ingredients</h2>
          <div class="flex column q-gutter-sm">
            <div
              class="ingredient"
              v-for="(ingredient, index) in recipeData.ingredients"
              :key="index"
            >
              <span class="text-18 text-regular">{{ ingredient }}</span>
            </div>
          </div>
        </div>

        <!-- Instructions -->
        <div class="q-mt-md">
          <h2 class="text-24 text-semibold q-mb-sm">Instructions</h2>
          <div class="flex column q-gutter-xs">
            <div
              class="instruction"
              v-for="(instruction, index) in recipeData.instructions"
              :key="index"
            >
              <span class="text-18 text-regular">{{ instruction }}</span>
            </div>
          </div>
        </div>

        <q-separator class="q-my-lg" />

        <!-- Comments -->
        <div class="q-mt-lg">
          <h2 class="text-24 text-semibold q-mb-sm">Comments</h2>
          <div class="q-my-lg">
            <div class="flex justify-between items-center">
              <div class="flex q-gutter-sm items-center">
                <div class="profile-pic">
                  <q-avatar
                    color="primary"
                    size="45px"
                    class="q-mr-md block"
                    text-color="white"
                    >J</q-avatar
                  >
                </div>
                <div class="input">
                  <q-input flat outlined placeholder="Add a comment" />
                </div>
              </div>
              <div class="button">
                <q-btn
                  round
                  outline
                  unelevated
                  color="white"
                  text-color="black"
                  icon="send"
                />
              </div>
            </div>
          </div>
          <div v-if="comments.length !== 0">
            <div
              v-for="comment in comments"
              :key="comment.user_id"
              :class="{ 'last-comment': index === comments.length - 1 }"
              class="flex no-wrap q-gutter-sm q-mt-md q-mb-lg"
            >
              <div class="">
                <q-avatar
                  color="primary"
                  size="45px"
                  class="q-mr-md"
                  text-color="white"
                  >{{ comment.username.charAt(0).toUpperCase() }}</q-avatar
                >
              </div>
              <div>
                <h3 class="text-18 text-medium q-mb-xs">
                  {{ comment.username }}
                </h3>
                <p class="text-12 text-thin">
                  {{ comment.comment }}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="no-comments">No Comments for now</div>
        </div>
      </div>
    </div>
    <q-inner-loading :showing="pageLoadingState" color="accent-1" />
  </div>
</template>

<script setup lang="js">
import { GetRecipe } from '@composables/Recipe';
import {ref, onMounted} from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const recipeData = ref({});
const pageLoadingState = ref(false);

const comments = ref([
  {
    user_id: 1,
    username: 'Julius123',
    comment:
      'Wow, this recipe is a game-changer! I never thought I could make something so delicious with just a few ingredients. The flavors are out of this world, and the step-by-step instructions made it super easy to follow. My family couldn’t get enough of it! Definitely adding this to my regular rotation. Thanks for sharing this amazing recipe! 🌟👩‍🍳'
  },
  {
    user_id: 2,
    username: 'Test_123',
    comment:
      "Tried this recipe last night and it was a total hit! The combination of ingredients is pure genius – who knew such simple things could create such a flavor explosion? My kitchen smelled amazing, and my taste buds were doing a happy dance. Can't wait to impress my friends with this dish at our next dinner party. This recipe is a keeper for sure! 🍽️🌟"
  },
  {
    user_id: 3,
    username: 'FoodieFanatic',
    comment:
      "I'm always on the lookout for new recipes, and this one did not disappoint! The flavors were on point, and the presentation was restaurant-quality. I even took a picture to show off my culinary skills. Thanks for sharing this gem! 📸👨‍🍳 #FoodieGoals #DeliciousDelights"
  },
  {
    user_id: 4,
    username: 'HealthyEats4Life',
    comment:
      "As someone who's health-conscious, I appreciate finding recipes that are both nutritious and tasty. This one struck the perfect balance! It's now become a go-to option when I want a satisfying, guilt-free meal. Kudos to you for making healthy eating so enjoyable! 🥗👏 #CleanEating #BalancedFlavors"
  }
]);

onMounted(() => {
  pageLoadingState.value = true;
  let payload = {
    id: route.params.id
  }
  GetRecipe(payload).then((response) => {
    if(response.status === 'success'){
      recipeData.value = response.data;
    }
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    pageLoadingState.value = false;
  })
})
</script>

<style lang="scss" scoped></style>

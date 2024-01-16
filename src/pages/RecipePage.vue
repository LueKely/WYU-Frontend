<template>
  <div class="recipe-page">
    <div v-if="!pageLoadingState" class="recipe-page__container">
      <div class="flex items-center justify-between">
        <!-- User Info -->
        <div class="flex items-center q-my-md">
          <q-avatar
            color="primary"
            size="55px"
            class="q-mr-md"
            text-color="white"
            >{{ userInitial }}</q-avatar
          >
          <div class="flex-column text-18 q-ml-sm">
            <p
              class="text-24 text-semibold cursor-pointer"
              @click="
                router.push({
                  name: 'profile',
                  params: {
                    id: recipeData.user_id,
                    isSelfVisit: recipeData.user_id === user_id ? 1 : 0,
                  },
                })
              "
            >
              {{ recipeData.username }}
            </p>
            <p class="text-18 text-grey-7">
              {{ recipeData.createdAt?.split("T")[0] }}
            </p>
          </div>
        </div>

        <!-- edit and delete function -->
        <div v-if="recipeData.user_id === user_id">
          <q-btn flat color="primary" size="lg" rounded icon="more_vert">
            <q-menu anchor="bottom middle" self="top middle">
              <q-list style="min-width: 100px">
                <q-item
                  clickable
                  @click="
                    router.push({
                      name: 'create',
                      params: { id: route.params.id },
                    })
                  "
                >
                  <q-item-section avatar>
                    <q-icon color="blue" name="edit" />
                  </q-item-section>
                  <q-item-section>Edit </q-item-section>
                </q-item>

                <q-separator />
                <!-- add delete section here mah nigga -->
                <q-item @click="confirmDelete = true" clickable>
                  <q-item-section avatar>
                    <q-icon color="red" name="delete" />
                  </q-item-section>
                  <q-item-section>Delete</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <!-- <q-btn
            square
            color="primary"
            round
            flat
            outlined
            :ripple="false"
            icon="edit"
            @click="
              router.push({ name: 'create', params: { id: route.params.id } })
            "
          /> -->
        </div>
      </div>

      <!-- Recipe Image-->
      <div class="recipe-page__container__img">
        <q-img
          style="border-radius: 10px"
          class="ulam__image"
          :src="recipeData.image_url"
          alt="ulam of the day image"
        />
      </div>
      <div class="interactions flex q-gutter-md q-mt-xs items-center q-mb-sm">
        <div class="heart">
          <q-img
            loading="lazy"
            no-spinner
            src="../assets/heart_filled.svg"
            width="30px"
          />
          <span class="block text-center text-12 q-mt-xs">{{
            numberOfLikes
          }}</span>
        </div>
        <div>
          <q-img
            loading="lazy"
            no-spinner
            src="../assets/save_filled.svg"
            width="30px"
          />
          <span class="block text-center text-12 q-mt-xs">{{
            numberOfFavorites
          }}</span>
        </div>
      </div>

      <div class="recipe-page__container__recipe-information">
        <!-- Title and Tags -->
        <div class="flex justify-between flex-wrap items-center q-mt-md">
          <h2 class="text-24 text-semibold">{{ recipeData.recipe_name }}</h2>
          <div class="flex q-gutter-xs">
            <div v-for="(tag, index) in recipeData.tags" :key="index">
              <q-chip class="q-px-md" text-color="white">{{ tag }}</q-chip>
            </div>
          </div>
        </div>

        <!-- Metadata -->
        <div class="flex column q-mt-sm">
          <p class="text-18 text-thin text-grey-7">
            Difficulty: {{ recipeData.difficulty }}
          </p>
          <p class="text-18 text-thin text-grey-7">
            Cooking Time: {{ recipeData.cooking_time }}
          </p>
          <p class="text-18 text-medium q-mt-md">
            {{ recipeData.description }}
          </p>
        </div>

        <q-separator class="q-my-lg" />

        <!-- Ingredients -->
        <div class="q-mt-lg">
          <h2 class="text-24 text-semibold q-mb-sm">Ingredients</h2>
          <div class="flex column q-gutter-md">
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
        <div class="q-mt-lg">
          <h2 class="text-24 text-semibold q-mb-sm">Instructions</h2>
          <div class="flex column q-gutter-md">
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
                    >{{
                      currentUser.username.charAt(0).toUpperCase()
                    }}</q-avatar
                  >
                </div>
                <div class="input">
                  <q-input
                    flat
                    outlined
                    placeholder="Add a comment"
                    v-model="userComment"
                  />
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
                  @click="addComment(userComment)"
                  :disabled="userComment === ''"
                />
              </div>
            </div>
          </div>
          <div v-if="comments.length !== 0">
            <div
              v-for="comment in comments"
              :key="comment._id"
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
                <p class="text-12 text-thin comment-content">
                  {{ comment.user_comment }}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="flex flex-center">
            <div class="no-comments text-thin">
              Be the first to comment on this post.
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-inner-loading :showing="pageLoadingState" color="accent-1" />
  </div>

  <!-- TO @raagas men dito ilalagay ung async function para idelete ung recipe -->
  <q-dialog v-model="confirmDelete" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="warning" color="red" text-color="white" />
        <span class="q-ml-sm"
          >Are you sure you want to delete this recipe?</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Delete" color="red" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="js">
import { GetRecipe, AddNewComment } from '@composables/Recipe';
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { useCacheStore } from "../stores/cacheStore";
import { LocalStorage } from "quasar";
import { root } from 'postcss';

const router = useRouter();
const route = useRoute();
const caching = useCacheStore();
const recipeData = ref({});
const pageLoadingState = ref(false);

const userInitial = ref("");
const userComment = ref("");
const comments = ref([]);
const confirmDelete = ref(false);

let numberOfLikes = ref(0);
let numberOfFavorites = ref(0);

const currentUser = LocalStorage.getItem("c_user");
const user_id = currentUser.id;

const addComment = (comment) => {
  if(comment){
    let payload = {
      user_id: user_id,
      username: currentUser.username,
      recipe_id: recipeData.value._id,
      user_comment: comment
    };

    AddNewComment(payload).then((response) => {
      if(response.status === 'success'){
        const newlyAddedComment = ref(response.data);
        comments.value.unshift(newlyAddedComment.value);
        userComment.value = '';
        caching.recentPosts = {};
        delete caching.recipe.recipes[route.params.id];

      }
    }).catch((error) => {
      console.log(error)
    })
  }
}

onMounted(() => {
  pageLoadingState.value = true;

  let isInCache = caching.getRecipeCacheByKey(route.params.id);

  if(isInCache){
    recipeData.value = isInCache;
    comments.value = recipeData.value.comments;
    numberOfLikes.value = recipeData.value.likes.length;
    numberOfFavorites.value = recipeData.value.saves.length;
    userInitial.value = recipeData.value.username.charAt(0).toUpperCase();
    pageLoadingState.value = false;
    return;
  }

  let payload = {
    id: route.params.id
  }


  GetRecipe(payload).then((response) => {
    if(response.status === 'success'){
      recipeData.value = response.data;
      comments.value = recipeData.value.comments;
      numberOfLikes.value = recipeData.value.likes.length;
      numberOfFavorites.value = recipeData.value.saves.length;
      userInitial.value = recipeData.value.username.charAt(0).toUpperCase();
      caching.setRecipeCache(recipeData.value._id, recipeData.value);
    }
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      pageLoadingState.value = false;
    })
})
</script>

<style lang="scss" scoped>
.recipe-page {
  &__container {
    &__recipe-information {
      .comment-content {
        word-break: break-word;
      }
    }
  }
}
</style>

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
          >
            <img
              v-if="recipeData?.user_profile_image !== ''"
              :src="recipeData?.user_profile_image"
              alt="User Profile Image"
            />
            <span v-else>{{
              recipeData?.username?.charAt(0).toUpperCase()
            }}</span>
          </q-avatar>
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
        <!-- add the shits -->
        <div
          class="heart cursor-pointer"
          @click="LikeOrUnlikePost(route.params.id)"
        >
          <q-img
            v-if="!heartToggled"
            loading="lazy"
            no-spinner
            src="../assets/icons/heart_outlined.svg"
            width="30px"
          />

          <q-img
            v-else
            loading="lazy"
            no-spinner
            src="../assets/icons/heart_filled.svg"
            width="30px"
          />
          <span class="block text-center text-12 q-mt-xs">{{
            numberOfLikes
          }}</span>
        </div>
        <div
          class="save cursor-pointer"
          @click="SaveOrUnsavePost(route.params.id)"
        >
          <q-img
            v-if="!saveToggled"
            loading="lazy"
            no-spinner
            src="../assets/icons/save_outline.svg"
            width="30px"
          />
          <q-img
            v-else
            loading="lazy"
            no-spinner
            src="../assets/icons/save_filled.svg"
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
                  >
                    <img
                      v-if="currentUser.user_profile_image != ''"
                      :src="currentUser.user_profile_image"
                      alt="User Profile Image"
                    />
                    <span v-else>{{
                      currentUser?.username.charAt(0).toUpperCase()
                    }}</span>
                  </q-avatar>
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
                >
                  <img
                    v-if="comment.user_profile_image != ''"
                    :src="comment.user_profile_image"
                    alt="User Profile Image"
                  />
                  <span v-else>{{
                    comment.username.charAt(0).toUpperCase()
                  }}</span>
                </q-avatar>
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
    <q-inner-loading :showing="pageLoadingState" color="accent-2" />
  </div>

  <!-- dialogue for when the user wants to deletes their recipe -->
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
        <q-btn
          flat
          label="Delete"
          @click="deleteRecipe"
          color="red"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="js">
import { useQuasar } from 'quasar';
import { ref, onMounted } from "vue";
import { LocalStorage } from "quasar";
import { useRoute, useRouter } from 'vue-router';

import { useCacheStore } from "../stores/cacheStore";
import { LikeORUnlike, SaveOrUnsave } from "../composables/Recipe";
import { GetRecipe, AddNewComment, DeleteRecipe } from '../composables/Recipe';

import Notification from "../composables/Notification";

const $q = useQuasar();
const route = useRoute();
const router = useRouter();

let pageLoadingState = ref(false);

const caching = useCacheStore();
const currentUser = LocalStorage.getItem("c_user");
const user_id = currentUser.id;

const recipeData = ref({});
const userInitial = ref("");
const userComment = ref("");
const comments = ref([]);
const confirmDelete = ref(false);
const heartToggled = ref(false);
const saveToggled = ref(false);
const numberOfLikes = ref(0);
const numberOfFavorites = ref(0);

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

const deleteRecipe = () => {
  let payload = {
    id: route.params.id,
  };
  DeleteRecipe(payload)
    .then((response) => {
      if (response.status === "success") {
        Notification.success($q,"Recipe deleted successfully");
        router.push({name: 'recent'});
      }
    })
    .catch((error) => {
      console.log(error);
      Notification.error($q,"Something went wrong");
    });
}

const LikeOrUnlikePost = (recipeId) => {
  if ( heartToggled.value){
    heartToggled.value = false;
    numberOfLikes.value -= 1;
  }
  else {
    heartToggled.value = true;
    numberOfLikes.value += 1;
  }

  let payload = {
    user_id: user_id,
    recipe_id: recipeId,
  };

  LikeORUnlike(payload)
    .then((response) => {
      if (response.status === "success") {
        caching.recentPosts = {};
        delete caching.recipe.recipes[recipeId];
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const SaveOrUnsavePost = (recipeId) => {

  if (saveToggled.value) {
    saveToggled.value = !saveToggled.value;
    numberOfFavorites.value -= 1;
  } else {
    saveToggled.value = !saveToggled.value;
    numberOfFavorites.value += 1;
    Notification.success($q,"Recipe saved successfully");
  }

  let payload = {
    user_id: user_id,
    recipe_id: recipeId,
  };

  SaveOrUnsave(payload)
    .then((response) => {
      if (response.status === "success") {
        caching.recentPosts = {};
        delete caching.recipe.recipes[recipeId];
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

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
      console.log(Boolean(recipeData.value.user_profile_image));
      comments.value = recipeData.value.comments;
      numberOfLikes.value = recipeData.value.likes.length;
      numberOfFavorites.value = recipeData.value.saves.length;
      userInitial.value = recipeData.value.username.charAt(0).toUpperCase();
      caching.setRecipeCache(recipeData.value._id, recipeData.value);

      if (recipeData.value.likes.length > 0) {
        recipeData.value.likes.forEach((like) => {
          if (like.user_id === user_id) {
            heartToggled.value = true;
          }
        });
      }

      if (recipeData.value.saves.length > 0) {
        recipeData.value.saves.forEach((save) => {
          if (save.user_id === user_id) {
            saveToggled.value = true;
          }
        });
      }
    }}).catch((error) => {
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

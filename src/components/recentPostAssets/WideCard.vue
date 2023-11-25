<template>
  <div class="wide__container">
    <div class="user__container">
      <div class="user__container--info">
        <q-avatar
          color="primary"
          size="55px"
          class="q-mr-md"
          text-color="white"
          >{{ userInitials }}</q-avatar
        >
        <div class="user__container--text text-18">
          <p class="text-18 text-semibold">{{ props.recipeData.username }}</p>
          <p class="text-12 q-mt-sm">
            {{ props.recipeData.createdAt.split("T")[0] }}
          </p>
        </div>
      </div>
      <p
        class="text-accent-2 text-medium text-18 cursor-pointer"
        @click="
          router.push({ name: 'recipe', params: { id: props.recipeData._id } })
        "
      >
        See recipe
      </p>
    </div>
    <q-img
      :src="props.recipeData.image_url"
      :alt="props.recipeData.recipe_name"
      style="border-radius: 10px"
      class="q-mb-md"
    />
    <div clas="recipe__info">
      <div class="flex justify-between items-center">
        <h2 class="text-24 text-semibold">
          {{ props.recipeData.recipe_name }}
        </h2>
        <div class="recent__tags">
          <div v-for="(tag, index) in props.recipeData.tags" :key="index">
            <q-chip
              class="q-mr-sm q-px-md"
              style="background: #f5a623 !important"
              text-color="white"
              >{{ tag }}</q-chip
            >
          </div>
        </div>
      </div>
      <div class="metadata q-my-sm">
        <p class="text-12 text-thin">
          Difficulty: {{ props.recipeData.difficulty }}
        </p>
        <p class="text-12 text-thin">Ingridients: {{ ingridientCount }}</p>
        <p class="text-12 text-thin">
          Cooking Time: {{ props.recipeData.cooking_time }} minutes
        </p>
      </div>
      <div class="description">
        <p class="text-18 text-medium">{{ props.recipeData.description }}</p>
      </div>
      <div class="interactions flex q-gutter-md q-mt-xs items-center">
        <div
          class="heart cursor-pointer"
          @click="LikeOrUnlikePost(props.recipeData._id)"
        >
          <q-img
            v-if="!heartToggled"
            loading="lazy"
            no-spinner
            src="../../assets/heart_outlined.svg"
            width="35px"
          />
          <q-img
            v-else
            loading="lazy"
            no-spinner
            src="../../assets/heart_filled.svg"
            width="35px"
          />
        </div>
        <div
          class="save cursor-pointer"
          @click="SaveOrUnsavePost(props.recipeData._id)"
        >
          <q-img
            v-if="!saveToggled"
            loading="lazy"
            no-spinner
            src="../../assets/save_outline.svg"
            width="35px"
          />
          <q-img
            v-else
            loading="lazy"
            no-spinner
            src="../../assets/save_filled.svg"
            width="35px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LikeORUnlike, SaveOrUnsave } from "@composables/Recipe";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCacheStore } from "../../stores/cacheStore";
import { LocalStorage } from "quasar";

const props = defineProps({
  recipeData: {
    type: Object,
    required: true,
  },
});

const caching = useCacheStore();
const router = useRouter();

const userInitials = computed(() => {
  return props.recipeData.username.charAt(0);
});

const ingridientCount = computed(() => {
  return props.recipeData.ingredients.length;
});

const currentUser = LocalStorage.getItem("c_user");
const currentUserId = currentUser.id;

const heartToggled = ref(false);
const saveToggled = ref(false);

onMounted(() => {
  if (props.recipeData.likes.length > 0) {
    props.recipeData.likes.forEach((like) => {
      if (like.user_id === currentUserId) {
        heartToggled.value = true;
      }
    });
  }

  if (props.recipeData.saves.length > 0) {
    props.recipeData.saves.forEach((save) => {
      if (save.user_id === currentUserId) {
        saveToggled.value = true;
      }
    });
  }
});

const LikeOrUnlikePost = (recipeId) => {
  heartToggled.value = !heartToggled.value;

  let payload = {
    user_id: currentUserId,
    recipe_id: recipeId,
  };

  LikeORUnlike(payload)
    .then((response) => {
      if (response.status === "success") {
        caching.recentPosts = {};
        delete caching.recipe.recipes[props.recipeData._id];
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const SaveOrUnsavePost = (recipeId) => {
  saveToggled.value = !saveToggled.value;

  let payload = {
    user_id: currentUserId,
    recipe_id: recipeId,
  };

  SaveOrUnsave(payload)
    .then((response) => {
      if (response.status === "success") {
        caching.recentPosts = {};
        delete caching.recipe.recipes[props.recipeData._id];
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style lang="scss" scoped></style>

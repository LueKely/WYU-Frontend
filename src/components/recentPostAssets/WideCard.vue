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
      alt="food"
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
            <q-chip class="q-mr-sm" color="primary" text-color="white">{{
              tag
            }}</q-chip>
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
        <div class="heart cursor-pointer" @click="heartToggled = !heartToggled">
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
        <div class="save cursor-pointer" @click="saveToggled = !saveToggled">
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  recipeData: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const userInitials = computed(() => {
  return props.recipeData.username.charAt(0);
});

const ingridientCount = computed(() => {
  return props.recipeData.ingredients.length;
});

const heartToggled = ref(false);
const saveToggled = ref(false);
</script>

<style lang="scss" scoped></style>

<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page--create">
      <q-form class="form--create" ref="recipeForm" greedy @submit="sendForm">
        <h2 class="text-32">Create a Recipe</h2>
        <label for="recipe__name">Recipe Name</label>
        <q-input
          :rules="[
            (val) => !!val || '* Required',
            (val) => val.length > 10 || 'Min 10 characters',
          ]"
          id="recipe__name"
          outlined
          v-model="recipeName"
        />
        <label for="recipe__photo">Photo Url</label>
        <q-input
          id="recipe__photo"
          :rules="[
            (val) => !!val || '* Required',

            (val) => /^https?:\/\/\S+$/.test(val) || 'Invalid URL',
          ]"
          outlined
          v-model="recipePhoto"
        >
          <template v-slot:prepend> <q-icon name="photo_library" /> </template
        ></q-input>
        <div class="form__part--dropdown">
          <!-- drop down -->
          <div>
            <h3 class="text-24">Set difficulty</h3>
            <q-btn-dropdown color="primary" outlined :label="recipeDifficulty">
              <q-list>
                <q-item clickable v-close-popup @click="setDifficulty('easy')">
                  <q-item-section>
                    <q-item-label>easy</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="setDifficulty('medium')"
                >
                  <q-item-section>
                    <q-item-label>medium</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="setDifficulty('hard')">
                  <q-item-section>
                    <q-item-label>hard</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <!-- time to finish -->
          <div>
            <h3 class="text-24">time to finish</h3>
            <div class="time__container">
              <div>
                <label for="time--min">Minimum Time in minutes</label>
                <q-input
                  id="time--min"
                  outlined
                  v-model.number="minTime"
                  type="number"
                  :rules="[
                    (val) => !!val || '* Required',
                    (val) => /^[0-9]+$/.test(val) || 'Only numbers are allowed',
                  ]"
                  :error="minGreater"
                >
                  <template v-slot:error>
                    Minimum time should be lesser than maximum time.
                  </template></q-input
                >
              </div>
              <div>
                <label for="time--max">Maximum Time in minutes</label>
                <q-input
                  id="time--max"
                  type="number"
                  outlined
                  v-model.number="maxTime"
                  :rules="[
                    (val) => !!val || '* Required',
                    (val) => /^[0-9]+$/.test(val) || 'Only numbers are allowed',
                  ]"
                  :error="maxLesser"
                >
                  <template v-slot:error>
                    Maximum time should be greater than minimum time.
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </div>
        <!-- tags -->
        <div class="form__tags">
          <h3 class="text-24">Tags</h3>
          <div class="tags__container">
            <div v-for="(tag, index) in recipeTagLists" :key="index">
              <q-chip
                v-model:selected="tag.isClicked"
                :color="tag.tagColor"
                text-color="white"
                @click="addTag(tag.tagName)"
              >
                {{ tag.tagName }}
              </q-chip>
            </div>
          </div>
        </div>

        <!-- desscription -->
        <div>
          <h3 class="text-24">Description</h3>
          <q-input
            :rules="[
              (val) => !!val || '* Required',
              (val) => val.length > 10 || 'Min 10 characters',
            ]"
            v-model="recipeDescription"
            outlined
            autogrow
          />
        </div>
        <div>
          <h3 class="text-24">Ingredients</h3>
          <ul class="ul--form">
            <li
              class="font li--form"
              v-for="(ingredient, index) in recipeIngredients"
              :key="index"
            >
              {{ ingredient }}
            </li>
          </ul>
          <q-input
            type="text"
            outlined
            autogrow
            v-model="ingredientInput"
          ></q-input>
          <div class="append__container">
            <q-btn
              outline
              round
              color="primary"
              icon="add"
              @click="appendToIngredients"
            ></q-btn>
          </div>
        </div>

        <div>
          <h3 class="text-24">Instructions</h3>
          <ol class="ul--form">
            <li
              class="font li--form"
              v-for="(step, index) in recipeSteps"
              :key="index"
            >
              {{ step }}
            </li>
          </ol>

          <q-input type="text" outlined autogrow v-model="stepInput"></q-input>

          <div class="append__container">
            <q-btn
              outline
              round
              color="primary"
              icon="add"
              @click="appendToSteps"
            ></q-btn>
          </div>
        </div>
        <div class="btn__container--create">
          <q-btn
            outline
            class="btn--submit font-bold text-18"
            color="accent"
            :loading="btnLoadingState"
            :disable="isBtnDisabled"
            type="submit"
            >Create</q-btn
          >
        </div>
      </q-form>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { CreateRecipe } from "../composables/Recipe";

const router = useRouter();

const recipeForm = ref(null);
const btnLoadingState = ref(false);
const recipeName = ref("");
const recipePhoto = ref("");
const recipeDifficulty = ref("difficulty");
const minTime = ref(0);
const maxTime = ref(0);
const recipeTime = ref(computed(() => `${minTime.value} - ${maxTime.value}`));
const recipeTags = ref([]);
const recipeDescription = ref("");

const ingredientInput = ref("");
const recipeIngredients = ref([]);

const stepInput = ref("");
const recipeSteps = ref([]);

const maxLesser = computed(() => {
  return (
    maxTime.value !== 0 &&
    (maxTime.value < minTime.value || maxTime.value === minTime.value)
  );
});

const minGreater = computed(() => {
  return (
    minTime.value !== 0 &&
    (minTime.value > maxTime.value || minTime.value === maxTime.value)
  );
});

const isBtnDisabled = computed(() => {
  return (
    recipeName.value === "" ||
    recipePhoto.value === "" ||
    recipeTags.value.length === 0 ||
    recipeDescription.value === "" ||
    recipeIngredients.value.length === 0 ||
    recipeSteps.value.length === 0 ||
    minGreater.value ||
    maxLesser.value ||
    recipeDifficulty.value === "difficulty"
  );
});

const setDifficulty = (difficulty) => {
  recipeDifficulty.value = difficulty;
};

const appendToIngredients = () => {
  if (ingredientInput.value === "") return;
  recipeIngredients.value.push(ingredientInput.value);
  ingredientInput.value = "";
};

const appendToSteps = () => {
  if (stepInput.value === "") return;
  recipeSteps.value.push(stepInput.value);
  stepInput.value = "";
};

const recipeTagLists = ref([
  { tagName: "breakfast", isClicked: false, tagColor: "red" },
  { tagName: "lunch", isClicked: false, tagColor: "purple" },
  { tagName: "dinner", isClicked: false, tagColor: "pink" },
  { tagName: "snack", isClicked: false, tagColor: "blue" },
  { tagName: "dessert", isClicked: false, tagColor: "amber" },
]);

const removeTag = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const addTag = (tag) => {
  if (!recipeTags.value.includes(tag)) {
    recipeTags.value.push(tag);
  } else {
    removeTag(recipeTags.value, tag);
  }
};

const sendForm = () => {
  btnLoadingState.value = true;

  recipeForm.value.validate().then((success) => {
    if (success) {
      const recipeData = {
        recipe_name: recipeName.value,
        image_url: recipePhoto.value,
        difficulty: recipeDifficulty.value,
        cooking_time: recipeTime.value,
        tags: [...recipeTags.value],
        description: recipeDescription.value,
        ingredients: [...recipeIngredients.value],
        instructions: [...recipeSteps.value],
      };

      CreateRecipe(recipeData)
        .then((response) => {
          if (response.status === "success") {
            router.push({ name: "recent" });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          btnLoadingState.value = false;
        });
    }
  });
};
</script>

<style lang="scss" scoped></style>

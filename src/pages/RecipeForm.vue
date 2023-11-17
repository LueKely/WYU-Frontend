<template>
  <div class="page--create">
    <q-form class="" ref="form" greedy @submit="sendForm">
      <h2 class="text-32">Create a Recipe</h2>
      <label for="recipe__name">Recipe Name</label>
      <q-input id="recipe__name" outlined v-model="recipeName" />
      <div>
        <!-- drop down -->
        <h3 class="text-24">Set difficulty</h3>
        <q-btn-dropdown color="primary" outlined :label="recipeDifficulty">
          <q-list>
            <q-item clickable v-close-popup @click="setDifficulty('easy')">
              <q-item-section>
                <q-item-label>easy</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="setDifficulty('medium')">
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
        <div>
          <h3 class="text-24">time to finish</h3>
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
            <h3 class="text-24">Description</h3>
            <q-input v-model="recipeDescription" outlined autogrow />
          </div>
        </div>
      </div>
    </q-form>
  </div>
  <div>
    <h3 class="text-24">Ingredients</h3>
    <div v-for="(ingredient, index) in recipeIngredients" :key="index">
      {{ ingredient }}
    </div>
    <q-input type="text" outlined autogrow v-model="ingredientInput"></q-input>
    <q-btn
      outline
      round
      color="primary"
      icon="add"
      @click="appendToIngredients"
    ></q-btn>
  </div>

  <div>
    <h3 class="text-24">Instructions</h3>
    <ol>
      <li v-for="(step, index) in recipeSteps" :key="index">
        {{ step }}
      </li>
    </ol>

    <q-input type="text" outlined autogrow v-model="stepInput"></q-input>
    <q-btn
      outline
      round
      color="primary"
      icon="add"
      @click="appendToSteps"
    ></q-btn>
  </div>

  <q-btn color="accent" :disable="isBtnDisabled" type="submit" @click="sendForm"
    >Send</q-btn
  >
</template>

<script setup>
import { ref, computed } from "vue";

const recipeName = ref("");
const recipeDifficulty = ref("difficulty");
const minTime = ref(0);
const maxTime = ref(0);
const recipeTime = ref(`${minTime.value} - ${maxTime.value}`);
const recipeDescription = ref("");

const ingredientInput = ref("");
const recipeIngredients = ref([]);

const stepInput = ref("");
const recipeSteps = ref([]);

const maxLesser = computed(() => {
  return maxTime.value < minTime.value || maxTime.value === minTime.value;
});

const minGreater = computed(() => {
  return minTime.value > maxTime.value || minTime.value === maxTime.value;
});

const isBtnDisabled = computed(() => {
  return (
    recipeName.value === "" ||
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

const sendForm = () => {
  const recipeData = {
    name: recipeName.value,
    difficulty: recipeDifficulty.value,
    time: recipeTime.value,
    description: recipeDescription.value,
    ingredients: recipeIngredients.value,
    steps: recipeSteps.value,
  };
  console.log(recipeData);
};
</script>

<style lang="scss" scoped></style>

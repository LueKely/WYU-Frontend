<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="2000"
  >
    <div class="page--create">
      <q-form
        v-if="!pageLoadingState"
        class="form--create"
        ref="recipeForm"
        greedy
        @submit="sendForm"
      >
        <!-- Recipe Name -->
        <h2 class="text-32 text-semibold q-py-lg text-center">
          {{ route.params.id ? "Edit" : "Create" }} a Recipe
        </h2>
        <div class="q-mb-sm">
          <label for="recipe__name" class="text-18 text-medium q-mb-sm block"
            >Recipe Name</label
          >
          <q-input
            :rules="[
              (val) => !!val || '* Required',
              (val) => val.length > 4 || 'Min 10 characters',
            ]"
            id="recipe__name"
            outlined
            v-model="recipeName"
          />
        </div>

        <!-- Image Input -->
        <div class="q-mb-sm">
          <label for="recipe__photo" class="text-18 text-medium q-mb-sm block"
            >Photo Url</label
          >
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
        </div>
        <div class="form__part--dropdown q-mb-sm">
          <!-- drop down -->
          <div>
            <h3 class="text-18 text-medium q-mb-sm block">Set difficulty</h3>
            <q-btn-dropdown
              unelevated
              :ripple="false"
              :outline="true"
              color="grey-7"
              :label="recipeDifficulty"
            >
              <q-list>
                <q-item clickable v-close-popup @click="setDifficulty('easy')">
                  <q-item-section>
                    <q-item-label>Easy</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="setDifficulty('medium')"
                >
                  <q-item-section>
                    <q-item-label>Medium</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="setDifficulty('hard')">
                  <q-item-section>
                    <q-item-label>Hard</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <!-- time to finish -->
          <div>
            <h3 class="text-18 text-medium q-mb-sm block">Cooking Time</h3>
            <div class="time__container">
              <div>
                <label for="time--min" class="text-12"
                  >Minimum Time in minutes</label
                >
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
                <label for="time--max" class="text-12"
                  >Maximum Time in minutes</label
                >
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
        <div class="form__tags q-mb-lg">
          <h3 class="text-18 text-medium block q-mb-sm">Categories</h3>
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
          <h3 class="text-18 text-medium block q-mb-sm">Description</h3>
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
          <h3 class="text-18 text-medium block q-mb-sm">Ingredients</h3>
          <ul v-if="recipeIngredients.length !== 0" class="ul--form">
            <li
              class="font li--form"
              v-for="(ingredient, index) in recipeIngredients"
              :key="index"
            >
              <span class="block" v-if="!ingredient.isEditing">{{
                ingredient.name
              }}</span>
              <q-input
                v-else
                v-model="ingredient.name"
                autogrow
                dense
                borderless
              />
              <div class="interactions">
                <q-icon
                  v-if="!ingredient.isEditing"
                  name="edit"
                  size="24px"
                  class="block cursor-pointer"
                  @click="ingredient.isEditing = true"
                />
                <q-icon
                  v-else
                  name="check"
                  size="24px"
                  class="block cursor-pointer"
                  @click="applyChanges('ingredient', ingredient.name, index)"
                />
                <q-icon
                  name="close"
                  size="24px"
                  class="block cursor-pointer"
                  @click="recipeIngredients.splice(index, 1)"
                />
              </div>
            </li>
          </ul>
          <q-input
            v-if="isAddingNewIngredient"
            outlined
            autogrow
            type="text"
            v-model="ingredientInput"
            :rules="[(val) => !!val || '* Required']"
          >
            <template v-slot:append>
              <q-icon
                v-if="ingredientInput"
                name="add"
                @click="appendToIngredients"
                class="cursor-pointer"
              />
              <q-icon
                v-else
                name="close"
                @click="cancelAdding('ingredient')"
                class="cursor-pointer"
              />
            </template>
          </q-input>
          <div class="append__container">
            <q-btn
              unelevated
              round
              color="primary"
              icon="add"
              @click="isAddingNewIngredient = true"
            ></q-btn>
          </div>
        </div>

        <div class="q-mb-xl">
          <h3 class="text-18 text-medium block q-mb-sm">Instructions</h3>
          <ol v-if="recipeSteps.length !== 0" class="ul--form">
            <li
              class="text-regular li--form"
              v-for="(step, index) in recipeSteps"
              :key="index"
            >
              <span v-if="!step.isEditing" class="block">{{ step.name }}</span>
              <q-input v-else v-model="step.name" autogrow dense borderless />
              <div class="interactions">
                <q-icon
                  v-if="!step.isEditing"
                  name="edit"
                  size="24px"
                  class="block cursor-pointer"
                  @click="step.isEditing = true"
                />
                <q-icon
                  v-else
                  name="check"
                  size="24px"
                  class="block cursor-pointer"
                  @click="applyChanges('instruction', step.name, index)"
                />
                <q-icon
                  name="close"
                  size="24px"
                  class="block cursor-pointer"
                  @click="recipeSteps.splice(index, 1)"
                />
              </div>
            </li>
          </ol>

          <q-input
            v-if="isAddingNewStep"
            outlined
            autogrow
            type="text"
            v-model="stepInput"
            :rules="[(val) => !!val || '* Required']"
          >
            <template v-slot:append>
              <q-icon
                v-if="stepInput"
                name="add"
                @click="appendToSteps"
                class="cursor-pointer"
              />
              <q-icon
                v-else
                name="close"
                @click="cancelAdding('instruction')"
                class="cursor-pointer"
              />
            </template>
          </q-input>

          <div class="append__container">
            <q-btn
              unelevated
              round
              color="primary"
              icon="add"
              @click="isAddingNewStep = true"
            ></q-btn>
          </div>
        </div>
        <div class="btn__container">
          <q-btn class="btn--submit font-bold" outline @click="router.go(-1)"
            >Cancel</q-btn
          >
          <q-btn
            flat
            class="btn--submit font-bold"
            :loading="btnLoadingState"
            :disable="isBtnDisabled"
            type="submit"
            >{{ route.params.id ? "Update" : "Create" }}</q-btn
          >
        </div>
      </q-form>
      <q-inner-loading :showing="pageLoadingState" color="accent-1" />
    </div>
  </transition>
</template>

<script setup>
import Notification from "../composables/Notification";
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { CreateRecipe, GetRecipe, UpdateRecipe } from "../composables/Recipe";
import { useCacheStore } from "../stores/cacheStore";
import { useQuasar } from "quasar";

const $q = useQuasar();

const router = useRouter();
const route = useRoute();
const caching = useCacheStore();

let pageLoadingState = ref(false);
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

const isAddingNewIngredient = ref(false);
const isAddingNewStep = ref(false);
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
  isAddingNewIngredient.value = false;
  let newIngredient = {
    name: ingredientInput.value,
    isEditing: false,
  };
  recipeIngredients.value.push(newIngredient);
  ingredientInput.value = "";
};

const appendToSteps = () => {
  if (stepInput.value === "") return;
  isAddingNewStep.value = false;
  let newStep = {
    name: stepInput.value,
    isEditing: false,
  };
  recipeSteps.value.push(newStep);
  stepInput.value = "";
};

const applyChanges = (type, newValue, index) => {
  if (type === "ingredient") {
    recipeIngredients.value[index].isEditing = false;
    recipeIngredients.value[index].name = newValue;
  } else {
    recipeSteps.value[index].isEditing = false;
    recipeSteps.value[index].name = newValue;
  }
};

const cancelAdding = (type) => {
  if (type === "ingredient") {
    isAddingNewIngredient.value = false;
    ingredientInput.value = "";
  } else {
    isAddingNewStep.value = false;
    stepInput.value = "";
  }
};

const recipeTagLists = ref([
  { tagName: "breakfast", isClicked: false, tagColor: "red" },
  { tagName: "lunch", isClicked: false, tagColor: "purple" },
  { tagName: "dinner", isClicked: false, tagColor: "pink" },
  { tagName: "snack", isClicked: false, tagColor: "blue" },
  { tagName: "dessert", isClicked: false, tagColor: "amber" },
  { tagName: "appetizers", isClicked: false, tagColor: "cyan" },
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
      // Get all the ingredients and instructions
      let modifiedIngredients = recipeIngredients.value.map((ingredient) => {
        return ingredient.name;
      });

      let modifiedInstrutions = recipeSteps.value.map((step) => {
        return step.name;
      });

      const recipeData = {
        recipe_name: recipeName.value,
        image_url: recipePhoto.value,
        difficulty: recipeDifficulty.value,
        cooking_time: recipeTime.value,
        categories: [...recipeTags.value],
        description: recipeDescription.value,
        ingredients: modifiedIngredients,
        instructions: modifiedInstrutions,
      };

      if (route.params.id) {
        recipeData.id = route.params.id;
        UpdateRecipe(recipeData)
          .then((response) => {
            if (response.status === "success") {
              caching.recentPosts = {};
              router.push({ name: "recent" });
              Notification.success($q, "Recipe updated successfully");
            }
          })
          .catch((error) => {
            Notification.error($q, "Something went wrong");
            console.log(error);
          })
          .finally(() => {
            btnLoadingState.value = false;
          });

        return;
      }

      CreateRecipe(recipeData)
        .then((response) => {
          if (response.status === "success") {
            caching.recentPosts = {};
            router.push({ name: "recent" });
            Notification.success($q, "Recipe created successfully");
          }
        })
        .catch((error) => {
          Notification.error($q, "Something went wrong");
          console.log(error);
        })
        .finally(() => {
          btnLoadingState.value = false;
        });
    }
  });
};

onMounted(() => {
  if (route.params.id) {
    pageLoadingState.value = true;
    GetRecipe({ id: route.params.id })
      .then((response) => {
        if (response.status === "success") {
          recipeName.value = response.data.recipe_name;
          recipeDescription.value = response.data.description;
          recipePhoto.value = response.data.image_url;
          recipeDifficulty.value = response.data.difficulty;
          minTime.value = response.data.cooking_time.split(" - ")[0];
          maxTime.value = response.data.cooking_time.split(" - ")[1];

          recipeTagLists.value.forEach((tag) => {
            if (response.data.categories.includes(tag.tagName)) {
              tag.isClicked = true;
              recipeTags.value.push(tag.tagName);
            }
          });

          recipeIngredients.value.push(
            ...response.data.ingredients.map((ingredient) => {
              return {
                name: ingredient,
                isEditing: false,
              };
            })
          );

          recipeSteps.value.push(
            ...response.data.instructions.map((instruction) => {
              return {
                name: instruction,
                isEditing: false,
              };
            })
          );
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        pageLoadingState.value = false;
      });
  }
});
</script>

<style lang="scss" scoped></style>

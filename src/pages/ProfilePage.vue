<template>
  <div class="page page--search">
    <div class="container--profile">
      <UserImage />
      <div class="container--split">
        <!-- insert user links here -->
        <div class="container__user--info">
          <UserLinks />
        </div>
        <div class="container__user--activity">
          <!-- navigation for the two -->
          <div class="container__controls">
            <button
              class="font text-18"
              :class="{ post: !choice }"
              @click="toggleLikedPost"
            >
              Posts
            </button>
            <button
              class="font text-18"
              :class="{ collection: choice }"
              @click="toggleCollections"
            >
              Collection
            </button>
            <hr />
          </div>

          <component :is="isCollections"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserImage from "@profile/UserImage.vue";
import UserLinks from "@profile/UserLinks.vue";
import UsersPosts from "@profile/UsersPosts.vue";
import UserLikedPost from "@profile/UserLikedPost.vue";
import { provide, ref, computed } from "vue";

const choice = ref(false);
provide("userPosts", ["foo"]);
provide("collections", ["bar"]);
const isCollections = computed(() =>
  choice.value === true ? UserLikedPost : UsersPosts
);

const toggleCollections = () => {
  choice.value = true;
};

const toggleLikedPost = () => {
  choice.value = false;
};
</script>

<style lang="scss" scoped>
.container--profile {
  padding-block: 90px 100px;
  box-shadow: 0px 0px 20px 0px rgba(206, 206, 206, 0.932);
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex: 1;

  width: 60%;
  min-height: 100%;
}

.container--split {
  padding-top: 52px;
  z-index: 1;
  flex: 1;
  position: relative;
  bottom: 52px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-inline: 50px 20px;
}

.container__controls {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  button {
    transition: all 0.3s ease-in-out 0s;
    padding: 5px 20px;
    outline: none;
    border: none;
    border-bottom: solid 3px #d1d1d1;
    background-color: transparent;
  }

  button:hover {
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    background-color: #eceaea;
  }

  button.post,
  button.collection {
    transition: all 0.3s ease-in-out 0s;
    border-bottom: solid 3px #ffb74d;
  }

  hr {
    margin: 0;
    width: 100%;
    border: none;
    height: 3px;
    background-color: rgb(224, 222, 222);
  }
}

.container__user--info {
  padding-right: 50px;
  flex: 0.8;
}

.container__user--activity {
  // height: 100%;

  flex: 2;
}
</style>

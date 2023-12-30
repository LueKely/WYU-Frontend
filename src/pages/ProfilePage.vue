<template>
  <div class="page page--search">
    <div v-if="!pageLoadingState" class="container--profile">
      <UserImage />
      <div class="container--split">
        <!-- insert user links here -->
        <div class="container__user--info">
          <UserLinks :user="userInfo.user" />
        </div>
        <div class="container__user--activity">
          <!-- navigation for the two -->
          <div class="container__controls">
            <button
              class="font text-18"
              :class="{ post: choice }"
              @click="choice = true"
            >
              Posts
            </button>
            <button
              v-if="!hideCollectionMenu"
              class="font text-18"
              :class="{ collection: !choice }"
              @click="choice = false"
            >
              Collection
            </button>
            <hr />
          </div>

          <component
            :is="isCollections"
            :posts="userInfo.posts"
            :savePosts="userInfo.saves"
          ></component>
        </div>
      </div>
    </div>
    <q-inner-loading :showing="pageLoadingState" color="accent-2" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { LocalStorage } from "quasar";
import UserImage from "@profile/UserImage.vue";
import UserLinks from "@profile/UserLinks.vue";
import UsersPosts from "@profile/UsersPosts.vue";
import UserLikedPost from "@profile/UserCollection.vue";
import { GetAllUserInfo } from "@composables/UserProfile";

const route = useRoute();
const pageLoadingState = ref(false);
const userInfo = ref([]);
const currentUser = LocalStorage.getItem("c_user");

const choice = ref(true);
const hideCollectionMenu = computed(
  () => Number(route.params.isSelfVisit) === 0
);

const isCollections = computed(() =>
  choice.value ? UsersPosts : UserLikedPost
);

const getUserInfo = () => {
  pageLoadingState.value = true;

  if (route.params) {
    const currentUserId = currentUser.id;
    // 1 = true, 0 = false
    const isSelfVisit = ref(currentUserId === route.params.id ? 1 : 0);

    let payload = {
      id: route.params.id,
      isSelfVisit: isSelfVisit.value,
    };

    GetAllUserInfo(payload)
      .then((response) => {
        if (response.status === "success") {
          userInfo.value = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        pageLoadingState.value = false;
      });
  }
};

watch(
  () => route.params,
  (value) => {
    route.name === "profile" && getUserInfo();
  }
);

onMounted(() => {
  getUserInfo();
});
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

  width: 80%;
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
    background-color: #d1d1d1;
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

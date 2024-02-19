<template>
  <div class="page page--search">
    <div v-if="!pageLoadingState" class="container--profile">
      <UserImage
        :profileBanner="userInfo.user?.user_bg_image"
        :profilePicture="userInfo.user?.user_profile_image"
      />
      <div class="container--split">
        <!-- insert user links here -->
        <div class="container__user--info">
          <component
            @send-signal="changeEditState"
            :is="isEditingProfile"
            :user="userInfo.user"
          />
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
import { useRoute, useRouter } from "vue-router";
import { LocalStorage } from "quasar";

import { GetAllUserInfo } from "../composables/UserProfile";

import UserImage from "../components/profileAssets/UserImage.vue";
import UserLinks from "../components/profileAssets/UserLinks.vue";
import UsersPosts from "../components/profileAssets/UsersPosts.vue";
import ProfileForm from "../components/profileAssets/ProfileForm.vue";
import UserLikedPost from "../components/profileAssets/UserCollection.vue";

const router = useRouter();
const route = useRoute();
let pageLoadingState = ref(false);

const userInfo = ref([]);
const isEditing = ref(false);
const currentUser = LocalStorage.getItem("c_user");
const choice = ref(true);

const changeEditState = (e) => {
  isEditing.value = e;
};

const isEditingProfile = computed(() =>
  isEditing.value ? ProfileForm : UserLinks
);

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
    console.log(currentUserId === route.params.id);
    const isSelfVisit = currentUserId === route.params.id ? 1 : 0;
    console.log(isSelfVisit);

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

const checkIfUserIsSelf = (value) => {
  if (value.id === currentUser.id && value.isSelfVisit === String(1)) {
    getUserInfo();
  } else if (value.id !== currentUser.id && value.isSelfVisit === String(0)) {
    getUserInfo();
  } else if (value.id === currentUser.id && value.isSelfVisit === String(0)) {
    router.push({
      name: "profile",
      params: { id: currentUser.id, isSelfVisit: 1 },
    });
  } else {
    router.push({
      name: "profile",
      params: { id: currentUser.id, isSelfVisit: 0 },
    });
  }
};

watch(
  () => route.params,
  (value) => {
    if (route.name === "profile") {
      checkIfUserIsSelf(value);
    }
  }
);

onMounted(() => {
  if (checkIfUserIsSelf(route.params)) {
    getUserInfo();
  }
});
</script>

<style lang="scss" scoped>
.container--profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  width: 80%;
  min-height: 100%;

  padding-block: 90px 100px;

  background-color: #f5f5f5;
  box-shadow: 0px 0px 20px 0px rgba(206, 206, 206, 0.932);

  .container--split {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;

    position: relative;
    bottom: 52px;

    width: 100%;

    padding-top: 52px;
    padding-inline: 50px 20px;

    z-index: 1;

    .container__user--info {
      flex: 0.8;
      padding-right: 50px;
    }

    .container__user--activity {
      flex: 2;

      .container__controls {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        button {
          padding: 5px 20px;

          background-color: transparent;
          outline: none;
          border: none;
          border-bottom: solid 3px #d1d1d1;
          transition: all 0.3s ease-in-out 0s;

          &.post,
          &.collection {
            transition: all 0.3s ease-in-out 0s;
            border-bottom: solid 3px #ffb74d;
          }

          &:hover {
            background-color: #eceaea;
            cursor: pointer;
            transition: all 0.3s ease-in-out 0s;
          }
        }

        hr {
          width: 100%;
          height: 3px;

          margin: 0;

          border: none;
          background-color: #d1d1d1;
        }
      }
    }
  }
}
</style>

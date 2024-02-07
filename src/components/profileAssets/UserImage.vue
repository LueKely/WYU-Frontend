<template>
  <div class="container__profile--image">
    <div class="container__profile--banner">
      <q-img :src="props.profileBanner" height="300px" :ratio="4 / 3" />
    </div>
    <div class="container__profile--avatar">
      <q-avatar size="120px" color="teal" text-color="white">
        <img
          v-if="props.profilePicture"
          :src="props.profilePicture"
          alt="User Profile Pic"
        />
        <span v-else> {{ username.charAt(0).toUpperCase() }}</span>
      </q-avatar>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LocalStorage } from "quasar";
import { useUserStore } from "../../stores/userStore";

const userStore = useUserStore();
const currentUser = userStore.getUser || LocalStorage.getItem("c_user");
const username = ref(currentUser.username);
const props = defineProps({
  profileBanner: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.container__profile--image {
  z-index: 2;
  padding-inline: 20px;
  background-color: transparent;
  height: 352px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.container__profile--banner {
  position: absolute;
  top: 0;
  left: 0;

  height: 300px;
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #ffb74d;
}

.container__profile--avatar {
  margin-left: 30px;
}
</style>

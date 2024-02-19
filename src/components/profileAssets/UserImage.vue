<template>
  <div class="images__container">
    <div class="images__container--banner">
      <q-img
        :src="props.profileBanner"
        loading="lazy"
        height="300px"
        :ratio="4 / 3"
        alt="User Banner"
      />
    </div>
    <div class="images__container--avatar">
      <q-avatar size="120px" color="teal" text-color="white">
        <q-img
          v-if="props.profilePicture"
          loading="lazy"
          :src="props.profilePicture"
          alt="User Profile Avatar"
          :ratio="1"
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

const props = defineProps({
  profileBanner: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
});

const userStore = useUserStore();
const currentUser = userStore.getUser || LocalStorage.getItem("c_user");
const username = ref(currentUser.username);
</script>

<style lang="scss" scoped>
.images__container {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;

  width: 100%;
  height: 352px;

  padding-inline: 20px;

  background-color: transparent;

  z-index: 2;

  &--banner {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 300px;

    aspect-ratio: 4/3;
    background-color: #ffb74d;
  }

  &--avatar {
    margin-left: 30px;
  }
}
</style>

<template>
  <div class="navbar-container q-mb-md">
    <q-toolbar class="q-px-xl q-py-md">
      <div class="flex items-center q-gutter-xl">
        <q-avatar size="55px">
          <q-img src="/wyu-icon.svg" fit="cover"></q-img>
        </q-avatar>

        <q-input
          rounded
          dense
          outlined
          v-model="text"
          bg-color="grey-1"
          placeholder="Search dish..."
          @keyup.enter="handleSearchRecipe(text)"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-space />

      <q-tabs v-model="currentTab" shrink>
        <q-route-tab
          :ripple="false"
          class="text-weight-bold"
          name="home"
          label="Home"
          to="/home/discover"
          exact
        />
        <q-route-tab
          :ripple="false"
          name="profile"
          label="Profile"
          :to="{
            name: 'profile',
            params: { id: currentUser.id, isSelfVisit: 1 },
          }"
          exact
        />
      </q-tabs>

      <q-space />

      <q-avatar color="primary" class="q-mr-sm" text-color="white">
        {{ username.charAt(0).toUpperCase() }}
      </q-avatar>
      <LogoutButton />
    </q-toolbar>
  </div>
</template>

<script lang="js" setup>
import { ref} from "vue";
import LogoutButton from "../partials/LogoutButton.vue";
import { useUserStore } from "../../stores/userStore";
import { LocalStorage } from "quasar";
import {useRouter} from "vue-router";

const router = useRouter();
const text = ref("");
const currentTab = ref("home");

const userStore = useUserStore();
const currentUser = userStore.getUser || LocalStorage.getItem("c_user");
const username = ref(currentUser.username);

const handleSearchRecipe = (query) => {
  if(query){
    text.value = "";
    router.push({ name: 'search', params: { q: query } })
  }

}
</script>

<style lang="scss" scoped>
.navbar-container {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 0px 5px 13px -1px rgba(189, 189, 189, 1);
}
</style>

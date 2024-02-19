<template>
  <!-- User Fullname and Username -->
  <div>
    <h3 class="text-43 text-bold">
      {{ props.user?.first_name }} {{ props.user?.last_name }}
    </h3>
    <h4 class="text-light text-24" style="margin-bottom: 10px">
      @{{ props.user?.username }}
    </h4>
  </div>
  <!-- User Bio -->
  <p>
    {{ props.user?.user_bio || "No bio yet." }}
  </p>
  <q-separator class="q-my-md" />

  <ul class="font user__links">
    <li>
      <FacebookIcon />
      <a
        :href="`https://www.facebook.com/${props.user?.fb_username}`"
        target="_blank"
        >{{ props.user?.fb_username || "facebook" }}</a
      >
    </li>
    <li>
      <InstagramIcon />
      <a
        :href="`https://instagram.com/${props.user?.ig_username}`"
        target="_blank"
        >{{ props.user?.ig_username || "twitter" }}</a
      >
    </li>
    <li>
      <TwitterIcon />
      <a
        :href="`https://www.twitter.com/${props.user?.twt_username}`"
        target="_blank"
        >{{ props.user?.twt_username || "instagram" }}</a
      >
    </li>
  </ul>
  <q-btn
    v-if="Number(route.params.isSelfVisit) === 1"
    @click="editForm"
    outline
    rounded
    color="accent"
    label="edit info"
  />
</template>

<script setup>
import { useRoute } from "vue-router";

import FacebookIcon from "../icons/FacebookIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";

const route = useRoute();

const emit = defineEmits(["sendSignal"]);
const props = defineProps({
  user: {
    type: Object,
  },
});

// emit on the same name but different variable same goes with profile form
const editForm = () => {
  emit("sendSignal", true);
};
</script>

<style lang="scss" scoped>
.user__links {
  padding: 0;

  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-block: 10px;
  }
}
</style>

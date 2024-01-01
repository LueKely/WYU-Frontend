<template>
  <div>
    <h3 class="text-24" style="margin-block: 15px 25px">Edit Info</h3>
    <q-form ref="form" @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
      <!-- first name -->
      <q-input
        filled
        v-model="formInput.first_name"
        label="First Name *"
        lazy-rules
        :rules="[(val) => (val && val.length > 5) || 'Please type something']"
      />
      <!-- surname -->
      <q-input
        filled
        v-model="formInput.last_name"
        label="Last Name *"
        lazy-rules
        :rules="[(val) => (val && val.length > 5) || 'Please type something']"
      />
      <!-- username -->
      <q-input
        filled
        v-model="formInput.username"
        label="Username *"
        lazy-rules
        :rules="[(val) => (val && val.length > 5) || 'Please type something']"
      />
      <!-- username -->
      <q-input
        filled
        v-model="formInput.user_bio"
        label="User Bio *"
        lazy-rules
        :rules="[(val) => (val && val.length > 5) || 'Please type something']"
      />
      <!-- profile picture -->
      <q-input
        filled
        v-model="formInput.user_profile_image"
        label="Profile Picture URL *"
        lazy-rules
        :rules="[
          (val) =>
            (val && /^https?:\/\/.*$/.test(val)) ||
            'Please enter a valid image URL',
        ]"
      />
      <!-- banner -->
      <q-input
        filled
        v-model="formInput.user_bg_image"
        label="Banner Picture URL *"
        lazy-rules
        :rules="[
          (val) =>
            (val && /^https?:\/\/.*$/.test(val)) ||
            'Please enter a valid image URL',
        ]"
      />
      <!-- facebook -->
      <q-input
        filled
        v-model="formInput.fb_username"
        label="Facebook Username "
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <!-- instagram -->
      <q-input
        filled
        v-model="formInput.ig_username"
        label="Instagram Username "
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <!-- twitter -->
      <q-input
        filled
        v-model="formInput.twt_username"
        label="X/Twitter Username "
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div>
        <q-btn
          @click="cancelEdit"
          outline
          rounded
          color="negative"
          label="cancel"
        />
        <q-btn
          label="Reset"
          type="reset"
          outline
          rounded
          color="warning"
          class="q-ml-sm q-mr-sm"
        />
        <q-btn
          outline
          rounded
          :disable="isDisabled"
          label="Submit"
          type="submit"
          color="positive"
          :loading="btnLoadingState"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { computed, onMounted, reactive, ref } from "vue";
import Notification from "../../composables/Notification";
import { EditUserInfo } from "@composables/UserProfile";

const emit = defineEmits(["sendSignal"]);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const form = ref({});
const $q = useQuasar();

// this is the the values of the form
const formInput = reactive({
  first_name: props.user?.first_name,
  last_name: props.user?.last_name,
  username: props.user?.username,
  user_bio: props.user?.user_bio,
  user_profile_image: props.user?.user_profile_image,
  user_bg_image: props.user?.user_bg_image,
  fb_username: props.user?.fb_username,
  ig_username: props.user?.ig_username,
  twt_username: props.user?.twt_username,
});

// only if these inputs are empty then disable the submit button
// i have excluded the social media links because they are not required
const isDisabled = computed(() => {
  return (
    formInput.first_name === "" ||
    formInput.last_name === "" ||
    formInput.username === "" ||
    formInput.user_bio === "" ||
    formInput.user_profile_image === "" ||
    formInput.user_bg_image === ""
  );
});

let btnLoadingState = ref(false);
function cancelEdit() {
  emit("sendSignal", false);
}

// this will clear out the form based on the props
function onReset() {
  formInput.first_name = "";
  formInput.last_name = "";
  formInput.username = "";
  formInput.user_bio = "";
  formInput.user_profile_image = "";
  formInput.user_bg_image = "";
  formInput.fb_username = "";
  formInput.ig_username = "";
  formInput.twt_username = "";
}

// this will submit the form and do you thingy here
function onSubmit() {
  console.log("asdasdasssss");
  btnLoadingState.value = true;
  form.value.validate().then((success) => {
    console.log("asdasdasd");
    if (success) {
      let payload = {
        id: props.user?._id,
        email: props.user?.email,
        ...formInput,
      };
      // put the axios gaming here
      EditUserInfo(payload)
        .then((response) => {
          if (response.status === "success") {
            Notification.success($q, "Edit successful");
            // this will refresh the page
            router.go();
          }
        })
        .catch((error) => {
          console.log(error);
          Notification.error($q, "An Error has occured");
        })
        .finally(() => {
          btnLoadingState.value = false;
        });
    }
  });
}

onMounted(() => {
  // do your gaming here
  console.log(props.user);
});
</script>

<style lang="scss" scoped></style>

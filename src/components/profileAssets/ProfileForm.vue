<template>
  <div>
    <h3 class="text-24 q-my-xl">Edit Info</h3>
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
      <!-- user bio -->
      <q-input
        filled
        v-model="formInput.user_bio"
        label="User Bio *"
        lazy-rules
        :rules="[(val) => (val && val.length > 5) || 'Please type something']"
        type="textarea"
      />
      <!-- profile picture -->
      <q-file
        id="user_profile"
        :rules="[
          (val) => !!val || '* Required',
          (val) =>
            /\.(jpg|jpeg|png|webp)$/i.test(val.name) ||
            'Invalid File Format(Only jpg, jpeg, png, webp allowed)',
        ]"
        accept=".jpg, .pdf, image/*"
        outlined
        v-model="formInput.user_profile_image"
        lazy-rules
        label="Upload Profile Image"
      >
        <template v-slot:prepend> <q-icon name="photo_library" /> </template
      ></q-file>
      <!-- banner -->
      <q-file
        id="user_profile"
        :rules="[
          (val) => !!val || '* Required',
          (val) =>
            /\.(jpg|jpeg|png|webp)$/i.test(val.name) ||
            'Invalid File Format(Only jpg, jpeg, png, webp allowed)',
        ]"
        accept=".jpg, .pdf, image/*"
        outlined
        v-model="formInput.user_bg_image"
        lazy-rules
        label="Upload Banner Image"
      >
        <template v-slot:prepend> <q-icon name="photo_library" /> </template
      ></q-file>
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
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";

import { EditUserInfo } from "../../composables/UserProfile";
import { uploadProfileImages } from "../../composables/UploadImage";

import Notification from "../../composables/Notification";

const emit = defineEmits(["sendSignal"]);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const $q = useQuasar();
const form = ref({});
let btnLoadingState = ref(false);

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
    formInput.user_bio === ""
  );
});

// this will clear out the form based on the props
const onReset = () => {
  formInput.first_name = "";
  formInput.last_name = "";
  formInput.username = "";
  formInput.user_bio = "";
  formInput.fb_username = "";
  formInput.ig_username = "";
  formInput.twt_username = "";
};

// this will submit the form and do you thingy here
const onSubmit = () => {
  btnLoadingState.value = true;
  form.value.validate().then((success) => {
    if (success) {
      uploadProfileImages(
        formInput.user_profile_image,
        formInput.user_bg_image,
        props.user?._id
      )
        .then((response) => {
          formInput.user_profile_image = response.profile;
          formInput.user_bg_image = response.banner;

          let payload = {
            id: props.user?._id,
            email: props.user?.email,
            ...formInput,
          };

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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

const cancelEdit = () => {
  emit("sendSignal", false);
};
</script>

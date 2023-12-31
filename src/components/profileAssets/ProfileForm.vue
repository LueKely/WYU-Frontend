<template>
  <div>
    <h3 class="text-24" style="margin-block: 10px 25px">Edit Info</h3>
    <q-form ref="form" @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
      <!-- first name -->
      <q-input
        filled
        v-model="formInput.firstName"
        label="First Name *"
        lazy-rules
        :rules="[(val) => (val && val.length > 10) || 'Please type something']"
      />
      <!-- surname -->
      <q-input
        filled
        v-model="formInput.surName"
        label="Last Name *"
        lazy-rules
        :rules="[(val) => (val && val.length > 10) || 'Please type something']"
      />
      <!-- username -->
      <q-input
        filled
        v-model="formInput.userName"
        label="Username *"
        lazy-rules
        :rules="[(val) => (val && val.length > 10) || 'Please type something']"
      />
      <!-- profile picture -->
      <q-input
        filled
        v-model="formInput.profilePic"
        label="Profile Picture URL *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <!-- banner -->
      <q-input
        filled
        v-model="formInput.bannerPhoto"
        label="Banner Picture URL *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
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
const emit = defineEmits(["sendSignal"]);
const router = useRouter();
const form = ref({});
const $q = useQuasar();
// only if these inputs are empty then disable the submit button
// i have excluded the social media links because they are not required
const isDisabled = computed(() => {
  return (
    formInput.firstName === "" ||
    formInput.surName === "" ||
    formInput.userName === "" ||
    formInput.profilePic === "" ||
    formInput.bannerPhoto === ""
  );
});

let btnLoadingState = ref(false);
function cancelEdit() {
  emit("sendSignal", false);
}

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

// this is the the values of the form
const formInput = reactive({
  firstName: props.user?.first_name,
  surName: props.user?.last_name,
  userName: props.user?.username,
  profilePic: props.user?.profile_pic,
  bannerPhoto: props.user?.banner_photo,
});

// this will clear out the form based on the props
function onReset() {
  formInput.firstName = props.user?.first_name;
  formInput.surName = props.user?.last_name;
  formInput.userName = props.user?.username;
  formInput.profilePic = props.user?.profile_pic;
  formInput.bannerPhoto = props.user?.banner_photo;
  formInput.fb_username = props.user?.fb_username;
  formInput.ig_username = props.user?.ig_username;
  formInput.twt_username = props.user?.twt_username;
}
// this will submit the form and do you thingy here
function onSubmit() {
  btnLoadingState.value = true;
  form.value.validate().then((success) => {
    if (success) {
      // put the axios gaming here
      DummyFunction(formInput)
        .then((response) => {
          if (response.status === "success") {
            btnLoadingState.value = false;
            Notification.success($q, "Edit successful");
            // this will refresh the page
            router.go();
          }
        })
        .catch((error) => {
          console.log(error);
          btnLoadingState.value = false;
          Notification.error($q, "An Error has occured");
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

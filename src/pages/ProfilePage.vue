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
          test
          <!-- navigation for the two -->
          <div class="container__controls"></div>
          <!-- insert the two here-->
          <div>
            <!--
            <UserCollections />
            <UserLikedPost /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserImage from "@profile/UserImage.vue";
import UserLinks from "@profile/UserLinks.vue";
import UserCollections from "@profile/UserCollections.vue";
import UserLikedPost from "@profile/UserLikedPost.vue";
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
  padding-inline: 100px 10px;
}

.container__user--info {
  flex: 1;
}

.container__user--activity {
  // height: 100%;

  flex: 2;
}
</style>

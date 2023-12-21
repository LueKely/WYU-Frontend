<template>
  <div class="page page--search">
    <div class="container--profile">
      <UserImage />
      <div class="container--split">
        <!-- insert user links here -->
        <div class="container__user--info">
          <!-- <UserLinks /> -->
        </div>
        <div class="container__user--activity">
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
  flex: 1;
  box-shadow: 0px 0px 20px 0px rgba(206, 206, 206, 0.932);
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 60%;
}
</style>

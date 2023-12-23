<template>
  <div class="user__text__contianer">
    <h3 class="text-43 text-bold">name</h3>
    <h4 class="text-light text-24" style="margin-bottom: 10px">@username</h4>
  </div>
  <p class="user-text__description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod esse explicabo
    laudantium vitae doloremque placeat, provident vel? Quidem fuga nostrum
    tempora neque repudiandae, rem eos ipsam doloribus numquam nam in!
  </p>
  <hr style="margin-block: 10px" class="profile" />
  <ul class="font user__links">
    <li>
      <FacebookIcon />
      <a href="">facebook</a>
    </li>
    <li>
      <InstagramIcon />
      <a href="">instagram</a>
    </li>
    <li>
      <TwitterIcon />
      <a href="">twitter</a>
    </li>
  </ul>
</template>

<script setup>
import FacebookIcon from "@profile/facebookIcon.vue";
import TwitterIcon from "@profile/twitterIcon.vue";
import InstagramIcon from "./InstagramIcon.vue";
</script>

<style lang="scss" scoped>
hr.profile {
  border-color: #e0dede;
}

.user__links {
  list-style: none;
  padding: 0;

  li {
    margin-block: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>

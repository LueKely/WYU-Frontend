<template>
  <div class="container__profile--image">
    <div class="container__profile--banner">
      <q-img
        src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg"
        height="300px"
        :ratio="4 / 3"
      />
    </div>
    <div class="container__profile--avatar">
      <q-avatar
        size="120px"
        font-size="52px"
        color="teal"
        text-color="white"
        icon="directions"
      />
    </div>
  </div>
</template>

<script setup></script>

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
  background-color: red;
}

.container__profile--avatar {
  margin-left: 30px;
}
</style>

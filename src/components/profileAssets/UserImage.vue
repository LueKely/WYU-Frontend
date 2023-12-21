<template>
  <div class="container__profile--image">
    <div class="container__profile--banner">
      <q-img
        src="https://picsum.photos/500/300"
        height="300px"
        :ratio="4 / 3"
      />
    </div>
    <div class="container__profile--avatar">
      <q-avatar
        size="100px"
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
}
</style>

<template>
  <div class="card__container">
    <q-img
      src="https://picsum.photos/500/300"
      :ratio="16 / 9"
      loading="true"
      width="100%"
      height="150px"
    />
    <div class="card__container--text">
      <h4 class="text-18 font-bold">Lorem Burger</h4>
      <p class="card__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolor
        nemo explicabo repellendus necessitatibus adipisci veritatis harum,
        cupiditate laborum, excepturi impedit culpa. Incidunt, assumenda.
        Reiciendis perspiciatis corporis voluptates optio ut?
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card__container {
  background: #ffe2b8;
  width: 310px;
  height: 290px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px;
}
.card__container--text {
  // background-color: red;

  height: 100px;
  width: 100%;
}
.card__text {
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

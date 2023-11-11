<template>
  <q-page class="page page--login">
    <div class="container">
      <!-- form -->
      <div class="login login--form shadow-3">
        <LoginForm></LoginForm>
      </div>

      <!-- carousel -->
      <div
        class="login login--carousel shadow-3 column items-center justify-center"
      >
        <div class="text-center">
          <h4>What's Your <span class="text-accent">Ulam</span></h4>
          <p class="text-primary">Discover.Cook.Share: Anong Ulam Mo?</p>
        </div>
        <FoodCarousel></FoodCarousel>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="js">
import FoodCarousel from 'src/components/FoodCarousel.vue';
import LoginForm from 'src/components/LoginForm.vue';
</script>

<style lang="scss" scoped>
.page {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page--login {
  position: relative;
  background-color: #fef8a9;
  background-image: radial-gradient(
      at 26% 60%,
      hsla(25, 91%, 59%, 1) 0,
      hsla(25, 91%, 59%, 0) 50%
    ),
    radial-gradient(
      at 49% 25%,
      hsla(262, 88%, 65%, 1) 0,
      hsla(262, 88%, 65%, 0) 50%
    ),
    radial-gradient(
      at 43% 17%,
      hsla(342, 87%, 66%, 1) 0,
      hsla(342, 87%, 66%, 0) 50%
    ),
    radial-gradient(
      at 31% 26%,
      hsla(345, 94%, 70%, 1) 0,
      hsla(345, 94%, 70%, 0) 50%
    ),
    radial-gradient(
      at 81% 55%,
      hsla(297, 88%, 68%, 1) 0,
      hsla(297, 88%, 68%, 0) 50%
    ),
    radial-gradient(
      at 70% 95%,
      hsla(197, 86%, 59%, 1) 0,
      hsla(197, 86%, 59%, 0) 50%
    ),
    radial-gradient(
      at 91% 14%,
      hsla(12, 91%, 59%, 1) 0,
      hsla(12, 91%, 59%, 0) 50%
    );
  z-index: 1;
}
.container::before {
  opacity: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  z-index: -1;

  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjAuMjMiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTczIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjciIHNwZWN1bGFyQ29uc3RhbnQ9IjEuMyIgc3BlY3VsYXJFeHBvbmVudD0iMjAiIGxpZ2h0aW5nLWNvbG9yPSIjZjlmOWY4IiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJ0dXJidWxlbmNlIiByZXN1bHQ9InNwZWN1bGFyTGlnaHRpbmciPgogICAgCQk8ZmVEaXN0YW50TGlnaHQgYXppbXV0aD0iMyIgZWxldmF0aW9uPSI5NSI+PC9mZURpc3RhbnRMaWdodD4KICAJPC9mZVNwZWN1bGFyTGlnaHRpbmc+CiAgCjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0idHJhbnNwYXJlbnQiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iI2Y5ZjlmOCIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==");
  background-repeat: repeat;
  background-size: contain;
}
.container {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 25px;

  background-size: contain;
  background-repeat: repeat;
  padding: 25px;
}

.login {
  border-radius: 15px;
  background-color: white;
}

.login--form {
  padding: 40px;
  height: 100%;
  width: 100%;
  flex: 1;
}
.login--carousel {
  height: 100%;
  width: 100%;
  flex: 2;
}
</style>

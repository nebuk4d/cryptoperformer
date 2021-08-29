<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: { TheHeader },
  setup() {},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

:root {
  background-color: rgb(62, 80, 104);
  color: white;
  font-family: "Roboto", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3 ease-out;
}

.route-leave-active {
  transition: all 0.3 ease-in;
}

.router-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

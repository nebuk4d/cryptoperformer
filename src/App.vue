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

import "primevue/resources/themes/vela-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //primeflex

export default defineComponent({
  name: "App",
  components: { TheHeader },
  setup() {},
});
</script>

<style>
:root {
  background-color: var(--surface-a);
  color: var(--text-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
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

<template>
  <header>
    <nav>
      <!-- <h1><router-link to="/">CryptoPerformer</router-link></h1> -->
      <ul>
        <li>
          <img alt="Vue logo" src="../../assets/logo.png" />
        </li>
        <li>
          <router-link to="/coin-info">CoinInfo</router-link>
        </li>
        <li>
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",
  setup() {},
});
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: rgb(44, 44, 83);
  border: 5px solid rgb(37, 50, 61);
}

nav {
  height: 100%;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

img {
  max-width: 30%;
  max-height: 30%;
}
</style>

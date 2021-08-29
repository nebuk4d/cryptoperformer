<template>
  <header>
    <nav>
      <div class="appName">
        <img alt="Vue logo" src="../../assets/logo.png" />
        <h1><router-link to="/">CryptoPerformer</router-link></h1>
      </div>
      <ul>
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
.appName {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

header nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
}

li {
  margin: 0 0.5rem;
}

a {
  text-decoration: none;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #5a8fb3;
  color: goldenrod;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

img {
  width: 5%;
  height: 5%;
}
</style>

<template>
  <div id="app">
    <Router />
    <router-view />
  </div>
</template>

<script>
import Router from "./router/index";
import { validateToken } from "./sagas/AuthSaga";
export default {
  name: "app",
  components: {
    Router,
  },
  setup() {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken(token);
    }
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

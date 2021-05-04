<template>
  <div id="app">
    <nav-bar :logedIn="this.logedIn" :user="this.user"></nav-bar>
    <router-view :user="this.user"> </router-view>
  </div>
</template>

<script>
import NavBar from "./templates/partials/NavBar";

export default {
  data() {
    return {
      user: null,
    };
  },
  name: "App",
  components: {
    NavBar,
  },
  methods: {},
  provide() {
    return {
      user: this.user,
      updateUser: (data) => {
        this.user = data;
      },
      clearUser: () => {
        this.user = null
      }
    };
  },
  computed: {
    logedIn() {
      if (this.user != null) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>

<template>
  <div id="app">
    <nav-bar
      :logedIn="this.logedIn"
      :user="this.user"
      :doLogOut="this.doLogOut"
    ></nav-bar>
    <router-view
      class="main-content"
      :isLogedIn="this.isLogedIn"
      :user="this.user"
    >
    </router-view>
  </div>
</template>

<script>
import NavBar from "./templates/partials/NavBar";
import axios from "axios";

export default {
  data() {
    return {
      user: null,
      isLogedIn: false,
    };
  },
  name: "App",
  components: {
    NavBar,
  },
  provide() {
    return {
      user: this.user,
      updateUser: (data) => {
        this.user = data;
      },
      clearUser: () => {
        this.user = null;
      },
    };
  },
  methods: {
    checkLogin() {
      axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3000/api/v1/user/login",
      })
        .then((response) => {
          if (response.data.status === "success") {
            this.isLogedIn = true;
            this.user = response.data.data[0];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    doLogOut() {
      if (this.logedIn) {
        this.user = null;
        this.isLogedIn = false;
      }
    },
  },
  computed: {
    logedIn() {
      if (this.user != null || this.isLogedIn) {
        return true;
      }
      return false;
    }
  },
  beforeMount() {
    this.checkLogin();
  },
};
</script>

<style>
body {
  padding: 0 !important;
  margin: 0 !important;
  /* overflow: hidden; */
}
.main-content {
  overflow: hidden;
}
</style>

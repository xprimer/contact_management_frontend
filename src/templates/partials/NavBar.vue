<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="/">Contact Management Project</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="this.logedIn === false">
          <router-link
            to="login"
            tag="a"
            class="nav-link btn btn-lg btn-primary text-white my-2"
          >
            Login
          </router-link>
        </li>
        <li v-if="this.logedIn===true" class="nav-item">
          <router-link to="dashboard" tag="a" class="nav-link btn btn-success text-white mx-1">
            Dashboard
          </router-link>
        </li>
        <li class="nav-item" v-if="this.logedIn === true">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
            >
              {{ this.user.username }}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button @click="logginOut" class="dropdown-item text-danger" type="button">
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "nav-bar",
  props: ["logedIn", "user", "doLogOut"],
  inject: ["clearUser"],
  data() {
    return {};
  },
  methods: {
    logginOut() {
      axios(
        {
          method: "GET",
          withCredentials: true,
          url: "http://localhost:3000/api/v1/user/logout",
          responseType: 'json'
        },
        { credential: "same-site" }
      ).then((response) => {
        console.log(response.data);
        if(response.data.status === 'success') {
          this.doLogOut();
          this.$router.push({name : 'home'});
        }
      }).catch(err => {
        console.log(err);
      });
    },
  },
};
</script>

<style>
</style>
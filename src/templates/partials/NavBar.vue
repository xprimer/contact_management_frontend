<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            class="nav-link btn btn-lg btn-primary text-white"
          >
            Login
          </router-link>
        </li>
        <li class="nav-item" v-if="this.logedIn === true">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
            >
              {{this.user.username}}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item text-danger" type="button">Logout</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  props: ["logedIn",'user'],
};
</script>

<style>
</style>
<template>
  <div>
    <nav-bar></nav-bar>
    <b-container>
      <slot> </slot>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";
import NavBar from "../templates/partials/NavBar.vue";

export default {
  name: "main-template",
  components: {
    BContainer,
    NavBar,
  },
};
</script>

<style>
</style>
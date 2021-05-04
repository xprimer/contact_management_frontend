<template>
  <div>
    <b-container>
      <slot> </slot>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";

export default {
  name: "main-template",
  components: {
    BContainer,
  },
};
</script>

<style>
</style>
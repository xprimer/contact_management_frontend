<template>
  <main-template>
    <div class="container">
      <div class="card mt-3 shadow-sm mx-auto">
        <div class="card-header">
          <div class="card-title h1 w-100 text-center">Login</div>
        </div>
        <form @submit.prevent="sendForm">
          <div class="card-body">
            <div class="form-group">
              <label>Username</label>
              <input
                @keyup="validation"
                type="text"
                class="form-control"
                :class="this.usernameErr.length > 0 ? this.invalidClass : ''"
                name="txtUsername"
              />
              <small class="invalid-feedback">
                {{ usernameErr }}
              </small>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                @keyup="validation"
                type="password"
                class="form-control"
                :class="this.passwordErr.length > 0 ? this.invalidClass : ''"
                name="txtPassword"
              />
              <small class="invalid-feedback">
                {{ passwordErr }}
              </small>
            </div>
          </div>
          <div class="card-footer">
            <input
              @submit.prevent
              type="submit"
              value="Login"
              class="btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
    {{ username }}
  </main-template>
</template>

<script>
import MainTemplate from "../templates/MainTemplate";

export default {
  data: () => {
    return {
      username: "",
      password: "",
      usernameErr: "",
      passwordErr: "",
      validClass: "is-valid",
      invalidClass: "is-invalid",
      errors: [],
    };
  },
  components: { MainTemplate },
  name: "Login",
  methods: {
    sendForm() {},
    validation(event) {
      if (
        event.originalTarget.name === "txtUsername" &&
        event.originalTarget.value
      ) {
        this.username = event.originalTarget.value;
        this.usernameErr = "";
      } else {
        return this.usernameErr = "Username can not leave blank !";
      }
      if (
        event.originalTarget.name === "txtPassword" &&
        event.originalTarget.value
      ) {
        this.password = event.originalTarget.value;
        this.passwordErr = "";
      } else {
        return this.passwordErr = "Password can not leave blank !";
      }
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .card {
    width: 40vw !important;
  }
}
</style>
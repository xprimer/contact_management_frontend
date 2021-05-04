<template>
  <main-template>
    <div class="container">
      <div v-if="this.logedUser === false" class="card mt-3 shadow-sm mx-auto">
        <div class="card-header">
          <div class="card-title h1 w-100 text-center">Login</div>
        </div>
        <form @submit.prevent="sendForm">
          <div class="card-body">
            <div class="form-group">
              <label>Username</label>
              <input
                @keyup="usernameValidation"
                type="text"
                class="form-control"
                :class="this.usernameErr.length > 0 ? this.invalidClass : ''"
                :value="this.username ? this.username : ''"
                name="txtUsername"
                autocomplete="false"
              />
              <small class="invalid-feedback">
                {{ usernameErr }}
              </small>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                @keyup="passwordValidation"
                type="password"
                class="form-control"
                :class="this.passwordErr.length > 0 ? this.invalidClass : ''"
                :value="this.password ? this.password : ''"
                name="txtPassword"
                autocomplete="false"
              />
              <small class="invalid-feedback">
                {{ passwordErr }}
              </small>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-center align-items-center">
            <input type="submit" value="Login" class="btn btn-success mx-auto" />
          </div>
        </form>
      </div>
      <div v-if="this.logedUser === true" class="card mt-3 mx-auto shadow-sm">
        <p class="text-warning text-center text-uppercase text-bold ">You already loged in !</p>
        <router-link to="home" tag="a" class="btn btn-lg btn-primary">
          Back to Home
        </router-link>
      </div>
      <div v-if="this.errors.length > 0">
        <div
          v-for="(error,index) in this.errors"
          :key="index"
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error!</strong> {{error.error}}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="clearErrors"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  </main-template>
</template>

<script>
import MainTemplate from "../templates/MainTemplate";
import axios from "axios";

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
  inject: ['updateUser'],
  props: ['user'],
  components: { MainTemplate },
  name: "Login",
  methods: {
    sendForm() {
      if (this.username.length && this.password.length) {
        axios(
          {
            method: "POST",
            url: "http://localhost:3000/api/v1/user/login",
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              txtUsername: this.username,
              txtPassword: this.password,
            },
            withCredentials: true,
          },
          { credentials: "same-origin" }
        )
          .then((response) => {
            console.log(response);
            if (response.data.status === 200) {
              console.log(response.data.data[0]);
              this.logedIn = true;
              this.updateUser(response.data.data[0]) ;
            } else if (
              response.data.status === 400 &&
              response.data.messages.length !== 0
            ) {
              console.log(response.data.messages);
              response.data.messages.map((error) => {
                this.errors.push(error);
              });
            } else {
              this.errors.push("Fail to login ! Please make sure you have entered exact username and password .");
            }
          })
          .catch((error) => {
            this.errors.push("Fail to login ! Please make sure you have entered exact username and password.");
            console.log(error);
          });
      }
    },
    usernameValidation(event) {
      this.username = event.target.value.trim();
      if (!this.username) {
        return (this.usernameErr = "Username can not be blank !");
      }
      return (this.usernameErr = "");
    },
    passwordValidation(event) {
      this.password = event.target.value.trim();
      if (!this.password) {
        return (this.passwordErr = "Password can not be blank !");
      }
      return (this.passwordErr = "");
    },
    clearErrors() {
      this.errors = [];
    }
  },
  computed: {
    logedUser(){
      if(this.user != null) {
        return true;
      }
      return false;
    }
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
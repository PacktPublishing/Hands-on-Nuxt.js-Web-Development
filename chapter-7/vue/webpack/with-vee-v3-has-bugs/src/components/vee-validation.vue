<template>
  <div class="container">
    <!-- Consider refactoring this to its own component -->
    <!-- The 'passes' method allows us to only run our submit hander if the form is valid -->
    <ValidationObserver v-slot="{ passes }">
      <h2>Register</h2>
      <form @submit.prevent="passes(registerSubmit)" class="form">
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="field">
            <input v-model="register.email" type="email">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
          <div class="field">
            <input v-model="register.name" type="text">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
          <div class="field">
            <input v-model="register.password" type="password">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button>Submit</button>
      </form>
    </ValidationObserver>

    <!-- Consider refactoring this to its own component -->
    <!-- The 'passes' method allows us to only run our submit hander if the form is valid -->
    <ValidationObserver v-slot="{ passes }">
      <h2>Login</h2>
      <form @submit.prevent="passes(loginSubmit)" class="form">
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <div class="field">
            <input v-model="login.email" type="email">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
          <div class="field">
            <input v-model="login.password" type="password">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button>Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SomePage",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    login: {
      email: "",
      password: ""
    },
    register: {
      email: "",
      password: "",
      name: ""
    }
  }),
  methods: {
    loginSubmit() {
      console.log("Submitting to server!");
      // You could also validate manually like this.
      // this.$refs.loginForm.validate(); // this is 'async' use `await` or `then`.
    },
    registerSubmit() {
      console.log("Submitting to server!");
      // You could also validate manually like this.
      // this.$refs.registerForm.validate(); // this is 'async' use `await` or `then`.
    }
  }
};
</script>


<style>
.field {
  margin-bottom: 10px;
}

.form {
  margin-top: 20px;
}

span {
  display: block;
  margin-top: 3px;
}
</style>

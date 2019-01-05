<template>
  <div class="container col-md-6 mt-5">
    <h2>Đăng Nhập</h2>
    <br>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Email address</label>
        <input
          v-model.trim="form.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          v-model.trim="form.password"
          type="password"
          class="form-control"
          placeholder="Password"
        >
        <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
      </div>
      <button type="submit" class="btn btn-primary">Đăng Nhập</button>
    </form>
    <br>
    <p>Bạn chưa có tài khoản. Hãy đăng ký
      <nuxt-link to="/register">tại đây</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async submit() {
      await this.$auth
        .loginWith("local", {
          data: this.form
        })
        .catch(err => {
          console.log("errors: ", err);
        });
    }
  }
};
</script>

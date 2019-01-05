<template>
  <div class="container col-md-6 mt-5">
    <h2>Đăng Ký</h2>
    <br>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Tên của bạn</label>
        <input
          v-model.trim="form.name"
          type="text"
          class="form-control"
          placeholder="Điền tên của bạn"
        >
        <small class="form-text text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input
          v-model.trim="form.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Điền Email của bạn"
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
      <button type="submit" class="btn btn-primary">Đăng Ký</button>
    </form>
    <br>
    <p>Bạn đã có tài khoản ? Hãy đăng nhập
      <nuxt-link to="/login">tại đây</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  middleware: ["guest"],
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async submit() {
      await this.$axios.$post("register", this.form);
      await this.$auth.loginWith("local", {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      });

      this.$router.push("");
    }
  }
};
</script>

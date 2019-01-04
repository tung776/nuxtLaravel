<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <nuxt-link to="/" class="navbar-brand">Sơn Cát Tường</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <nuxt-link to="/" class="nav-item nav-link my-2">
            Trang Chủ
            <span class="sr-only">(current)</span>
          </nuxt-link>
          <nuxt-link to="/posts" class="nav-item nav-link my-2">Bài Viết</nuxt-link>
        </div>
      </div>
      <ul class="navbar-nav ml-auto">
        <nuxt-link to="/login" class="nav-item nav-link my-2">Đăng Nhập</nuxt-link>
        <nuxt-link to="/register" class="nav-item nav-link my-2">Đăng Ký</nuxt-link>
        {{authenticated}}
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // computed: {
  //   ...mapGetters({
  //     authenticated: "auth/authenticated"
  //   })
  // }
};
</script>

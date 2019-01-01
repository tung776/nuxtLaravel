<template>
  <div class="container col-md-6 mt-5">
    <h2>Đăng Nhập</h2>
    <br>
    <form>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small class="form-text text-danger">Thông báo lỗi.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">Thông báo lỗi.</small>
      </div>
      <button type="submit" class="btn btn-primary">Đăng Nhập</button>
    </form>
    <br>
    <p>Bạn chưa có tài khoản. Hãy đăng ký
      <nuxt-link to="/register">tại đây</nuxt-link>
    </p>
  </div>
</template>

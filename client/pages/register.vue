<template>
  <div class="container col-md-6 mt-5">
    <h2>Đăng Ký</h2>
    <br>
    <form>
      <div class="form-group">
        <label>Tên của bạn</label>
        <input type="text" class="form-control" placeholder="Điền tên của bạn">
        <small class="form-text text-danger">Thông báo lỗi.</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Điền Email của bạn"
        >
        <small class="form-text text-danger">Thông báo lỗi.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
        <small class="form-text text-danger">Thông báo lỗi.</small>
      </div>
      <button type="submit" class="btn btn-primary">Đăng Ký</button>
    </form>
    <br>
    <p>Bạn đã có tài khoản ? Hãy đăng nhập
      <nuxt-link to="/login">tại đây</nuxt-link>
    </p>
  </div>
</template>

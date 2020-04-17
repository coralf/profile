<template>
  <div id="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "123",
        password: "123"
      }
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/api/login", {
          ...this.form
        })
        .then(res => {
          if (res.status === 200) {
            this.$router.push("/home");
          }
        })
        .catch(() => {
          this.$message.error("用户名或密码错误");
        });
    }
  }
};
</script>

<style>
</style>
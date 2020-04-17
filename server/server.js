const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();
app.use(bodyParser());


router.post("/api/login", async ctx => {
  const { username, password } = ctx.request.body;
  console.log(username, password);
  if (username == "123" && password == "123") {
    ctx.status = 200;
    ctx.body = { code: 1, message: "登录成功x1" };
  } else {
    ctx.status = 401;
    ctx.body = { code: 0, message: "用户名或者密码错误" };
  }
});

router.get(
  "/api/userinfo",
  async ctx => {
    ctx.body = { code: 1, data: { name: "jerry", age: 20 } };
  }
);
app.use(router.routes());
app.listen(3000);
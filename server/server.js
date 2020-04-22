const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();

const user = require('./service/user');

app.use(bodyParser());

//supervisor server.js
router.post("/api/login", async ctx => {
  const { username, password } = ctx.request.body;
  const result = await user.login(username, password);
  if (result) {
    ctx.status = 200;
    ctx.body = {
      msg: 'ok'
    };
  } else {
    ctx.status = 400;
    ctx.body = {
      err: '用户名或密码错误'
    };
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
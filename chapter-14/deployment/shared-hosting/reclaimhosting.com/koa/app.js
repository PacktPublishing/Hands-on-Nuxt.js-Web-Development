const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World (Koa.js Sample)';
});

app.listen();

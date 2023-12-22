const Koa = require('koa');
const Router = require('koa-router');
const staticResource = require('koa-static');
const path = require('path')
const index = new Koa();
const router = new Router();
const cors = require('koa2-cors');

index.use(cors());

router.get('/notice', (ctx) => {
    const json = JSON.stringify(ctx.query)
    console.log(json);
    ctx.status = 200;
    ctx.body = { json };
});

index.use(router.routes());
index.use(router.allowedMethods());
index.use(staticResource(path.join(__dirname,'public')))
index.use(router.routes());
index.listen(3000);
console.log('服务器创建成功，启动的端口是3000');
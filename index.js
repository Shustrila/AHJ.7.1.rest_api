import http from 'http';
import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();
const port = process.env.PORT || 7070;

app.use(koaBody({ urlencoded: true }));

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH');

    await next();
});

app.use(require('./ticket/router').routes());

http.createServer(app.callback()).listen(port);

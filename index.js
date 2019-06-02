import http from 'http';
import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody({ urlencoded: true }));
app.use(require('./ticket/router').routes());

http.createServer(app.callback()).listen(4000);

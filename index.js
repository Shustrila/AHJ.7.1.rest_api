import http from 'http';
import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();
const port = process.env.PORT || 7070;

app.use(koaBody({ urlencoded: true }));
app.use(require('./ticket/router').routes());

http.createServer(app.callback()).listen(port);

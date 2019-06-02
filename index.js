import https from 'https';
import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();
const port = (process.env.NODE_ENV = 'production') ? 80 : 4000;

app.use(koaBody({ urlencoded: true }));
app.use(require('./ticket/router').routes());

https.createServer(app.callback()).listen(port);

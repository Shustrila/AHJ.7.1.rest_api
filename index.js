import Koa from 'koa';
import koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody({ urlencoded: true }));
app.use(require('./ticket/router').routes());
app.listen(4000);

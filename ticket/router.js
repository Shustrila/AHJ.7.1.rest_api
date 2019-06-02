import Router from 'koa-router';
import Ticket from './Ticket';
import { createObjectDate } from './scripts';

const router = new Router();
const ticket = new Ticket([{
  id: 0,
  name: 'post',
  description: 'description',
  status: false,
  created: createObjectDate(new Date()),
}]);

router.get('/tickets', ticket.getAll.bind(ticket));
router.get('/tickets/:id', ticket.getOne.bind(ticket));

router.post('/tickets', ticket.create.bind(ticket));

router.put('/tickets', ticket.update.bind(ticket));

router.patch('/tickets/:id', ticket.editStatus.bind(ticket));

router.delete('/tickets/:id', ticket.delete.bind(ticket));

module.exports = router;

import { createObjectDate, searchItem } from './scripts';

class Ticket {
  constructor(list = []) {
    /** @private */
    this._list = list;

    /** @private */
    this._id = 1;
  }

  /**
     * @public
     * get all tickets
     *
     * @param ctx {Object}
     * @param next
     * @returns {Promise<void>}
     */

  async getAll(ctx, next) {
    const { response } = ctx;

    response.body = this._list;
    await next();
  }

  /**
     * @public
     * get one tickets
     *
     * @param ctx {Object}
     * @param next
     * @returns {Promise<void>}
     */

  async getOne(ctx, next) {
    try {
      const paramId = Number(ctx.params.id);

      ctx.response.body = await searchItem(this._list, paramId);

      await next();
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
     * @public
     * create new post
     *
     * @param ctx {Object}
     * @param next
     * @returns {Promise<void>}
     */

  async create(ctx, next) {
    const { name, description } = JSON.parse(ctx.request.body);
    const res = {};
    const data = {};
    let statusError = false;

    if (name === undefined || name.trim() === '') {
      statusError = true;

      res.status = 400;
      res.message = 'field name empty!';
    }

    if (!statusError) {
      data.id = this._id++;
      data.name = name;
      data.description = description;
      data.status = false;
      data.created = createObjectDate(new Date());

      this._list.push(data);

      res.satus = 200;
      res.message = 'create new post';
      res.data = data;
    }

    ctx.response.body = res;
    await next();
  }

  /**
     * @public
     * update one ticket
     *
     * @param ctx {Object}
     * @param next
     * @returns {Promise<void>}
     */

  async update(ctx, next) {
    try {
      const { id, name, description } = JSON.parse(ctx.request.body);
      const res = {};

      this._list = this._list.map((item) => {
        if (item.id === id) {
          item.name = name;
          item.description = description;
          res.data = item;
        }

        return item;
      });

      res.status = 200;
      res.message = `ticket id: ${id} update`;

      ctx.response.body = res;
    } catch (e) {
      throw new Error(e);
    }

    await next();
  }

  /**
     * @public
     * edit status ticket
     *
     * @param ctx {Object}
     * @param next
     * @returns {Promise<void>}
     */

  async editStatus(ctx, next) {
    const paramId = Number(ctx.params.id);
    const res = {};

    this._list = this._list.map((item) => {
      if (item.id === paramId) {
        item.status = !item.status;
        res.data = item.status;
      }

      return item;
    });

    res.status = 200;
    res.message = `ticket id: ${0} update`;

    ctx.response.body = res;

    await next();
  }

  /**
     * @public
     * delete one ticket
     *
     * @param ctx {Object}
     * @param next
     * @returns {Promise<void>}
     */

  async delete(ctx, next) {
    const paramId = Number(ctx.params.id);
    const res = {};

    this._list = this._list.filter(item => item.id !== paramId);

    res.status = 200;
    res.message = `ticket id: ${paramId} delete`;

    ctx.response.body = res;

    await next();
  }
}

export default Ticket;

import moment from 'moment';

/**
 * create object date
 *
 * @param dateObj {Date} = date
 */

export function createObjectDate(dateObj) {
  const objDate = {};
  const date = moment(dateObj);

  objDate.day = date.format('DD');
  objDate.year = date.format('YYYY');
  objDate.month = date.format('MM');
  objDate.full = date.format('YYYY-MM-DD');

  return objDate;
}

/**
 * @private
 * search one item from list
 *
 * @param list {Array}  - list posts;
 * @param id {Number} - id ticket
 * @returns {Promise<Object>}
 */

export function searchItem(list, id) {
  return new Promise((resolve) => {
    for (const item of list) {
      if (item.id === id) {
        resolve(item);
      }
    }

    resolve({});
  });
}

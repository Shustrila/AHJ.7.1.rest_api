import moment from "moment";

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


import Phantom from "./phantom";

/**
 * Retuns a new instance of Phantom class
 * @param args
 * @returns {Promise}
 */
module.exports.create = (args) => {
    return new Promise(resolve => resolve(new Phantom(args)));
};

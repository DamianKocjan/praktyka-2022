/** Create error
 * @param {string} message - error message
 * @param {number} status - error status
 */
module.exports.createError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

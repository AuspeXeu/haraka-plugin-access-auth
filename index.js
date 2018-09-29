exports.hook_mail = function (next, connection, params) {
  const mail_from = params[0];
  if (connection.notes.auth_user !== mail_from.address()) {
    return next(DENY, 'You are not authorized to send from this address');
  }
  return next();
}

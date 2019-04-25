exports.register = function () {
  this.load_access_auth_ini();
}

exports.load_access_auth_ini = function () {
  this.cfg = this.config.get('access_auth.ini', this.load_access_auth_ini);
  this.cfg.acl = this.cfg.acl || {}
}

exports.hook_mail = function (next, connection, params) {
  const mail_from = params[0];
  const auth_user = connection.notes.auth_user
  const authorized = (this.cfg.acl[auth_user] || '').split(',')
    .map(itm => itm.trim())
    .reduce((acc, itm) => acc || mail_from.address().match(new RegExp(itm)), auth_user === mail_from.address())

  if (!authorized) {
    return next(DENY, 'You are not authorized to send from this address');
  }
  return next();
}

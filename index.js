exports.register = function () {
  this.load_access_auth_ini();
}

exports.load_access_auth_ini = function () {
  const plugin = this;
  plugin.cfg = plugin.config.get('access_auth.ini', function () {
    plugin.load_access_auth_ini();
  });
  plugin.cfg.acl = plugin.cfg.acl || {}
}

exports.hook_mail = function (next, connection, params) {
  const plugin = this;
  const mail_from = params[0];
  const auth_user = connection.notes.auth_user
  const authorized = (plugin.cfg.acl[auth_user] || '').split(',')
    .map(itm => itm.trim())
    .reduce((acc, itm) => acc || itm === mail_from.address(), auth_user === mail_from.address())

  if (!authorized) {
    return next(DENY, 'You are not authorized to send from this address');
  }
  return next();
}

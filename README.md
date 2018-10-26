[![NPM][npm-img]][npm-url]

# haraka-plugin-access-auth

[![Greenkeeper badge](https://badges.greenkeeper.io/AuspeXeu/haraka-plugin-access-auth.svg)](https://greenkeeper.io/)

This plugin expects the usernames used for authentication to be the email address they are authorized to send emails from. For example `user1@domain.com` can only send emails from his own address but not `user2@domain.com`.

Configuration
-------------

Configuration is stored in `config/access_auth.ini` and uses the INI style formatting. The following example allows a user authenticated as `user1` to send emails from `user1@domain.com` and `support@domain.com`. If the username used for authentication is an email address, e.g., `user@domain.com`, that user can send from his own email address.

Example:

```
[acl]
user1=user1@domain.com,support@domain.com
```

[npm-img]: https://nodei.co/npm/haraka-plugin-access-auth.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-access-auth

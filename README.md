[![NPM][npm-img]][npm-url]

# haraka-plugin-access-auth

By default, this plugin expects the usernames used for authentication to be the email address they are authorized to send emails from. For example a user authenticated using the username `user1@domain.com` can only send emails from `user1@domain.com` but not `user2@domain.com`.

Configuration
-------------

Configuration is stored in `config/access_auth.ini` and uses the INI style formatting. The following example allows a user authenticated as `user1` to send emails from `user1@domain.com` and `support@domain.com`. If the username used for authentication is an email address, e.g., `user@domain.com`, that user can send from his own email address. The configuration supports regex matching, e.g. `^.*@doman.com$` allows the specific user to send emails on behalf of any user of `domain.com`.

Example:

```
[acl]
user1=user1@domain.com,support@domain.com
```

[npm-img]: https://nodei.co/npm/haraka-plugin-access-auth.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-access-auth

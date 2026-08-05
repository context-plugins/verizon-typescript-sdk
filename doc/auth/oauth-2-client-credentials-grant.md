
# OAuth 2 Client Credentials Grant



Documentation for accessing and setting credentials for thingspace_oauth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| oauthClientId | `string` | OAuth 2 Client ID | `oauthClientId` |
| oauthClientSecret | `string` | OAuth 2 Client Secret | `oauthClientSecret` |
| oauthToken | `OauthToken` | Object for storing information about the OAuth token | `oauthToken` |
| oauthClockSkew | `number` | Clock skew time in seconds applied while checking the OAuth Token expiry. | `clockSkew` |
| oauthTokenProvider | `(lastOAuthToken: OauthToken \| undefined, authManager: ThingspaceOauthManager) => Promise<OauthToken>` | Registers a callback for oAuth Token Provider used for automatic token fetching/refreshing. | `oauthTokenProvider` |
| oauthOnTokenUpdate | `(token: OauthToken) => void` | Registers a callback for token update event. | `oauthOnTokenUpdate` |



**Note:** Auth credentials can be set using `thingspaceOauthCredentials` object in the client.

## Usage Example

### Client Initialization

You must initialize the client with *OAuth 2.0 Client Credentials Grant* credentials as shown in the following code snippet. This will fetch the OAuth token automatically when any of the endpoints, requiring *OAuth 2.0 Client Credentials Grant* authentication, are called.

```ts
import { Client } from 'verizonlib';

const client = new Client({
  thingspaceOauthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret'
  },
});
```



Your application can also manually provide an OAuthToken using the setter `oauthToken` in `thingspaceOauthCredentials` object. This function takes in an instance of OAuthToken containing information for authorizing client requests and refreshing the token itself.

### Adding OAuth Token Update Callback

Whenever the OAuth Token gets updated, the provided callback implementation will be executed. For instance, you may use it to store your access token whenever it gets updated.

```ts
import { Client, OauthToken } from 'verizonlib';

const client = new Client({
  thingspaceOauthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthOnTokenUpdate: (token: OauthToken) => {
      // Add the callback handler to perform operations like save to DB or file etc.
      // It will be triggered whenever the token gets updated
      saveTokenToDatabase(token);
    }
  },
});
```

### Adding Custom OAuth Token Provider

To authorize a client using a stored access token, set up the `oauthTokenProvider` in `thingspaceOauthCredentials` along with the other auth parameters before creating the client:

```ts
import { Client, OauthToken, ThingspaceOauthManager } from 'verizonlib';

const client = new Client({
  thingspaceOauthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthTokenProvider: (lastOAuthToken: OauthToken | undefined, authManager: ThingspaceOauthManager) => {
      // Add the callback handler to provide a new OAuth token
      // It will be triggered whenever the lastOAuthToken is undefined or expired
      return loadTokenFromDatabase() ?? authManager.fetchToken();
    }
  },
});
```



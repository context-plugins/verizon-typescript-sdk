
# Certificate

Structure for the credentials required to connect to the ETX MQTT Message Exchange.

## Structure

`Certificate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `certPem` | `string` | Required | The string containing the certificate<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `4096`, *Pattern*: ``^[a-zA-Z0-9~\+\-!@#$%^&*()\`\[\]{=};\"':,.\/<>?\|\s]+$`` |
| `keyPem` | `string` | Required | The string containing the private key<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `4096`, *Pattern*: ``^[a-zA-Z0-9~\+\-!@#$%^&*()\`\[\]{=};\"':,.\/<>?\|\s]+$`` |
| `caPem` | `string` | Required | The string containing the CA certificate<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `4096`, *Pattern*: ``^[a-zA-Z0-9~\+\-!@#$%^&*()\`\[\]{=};\"':,.\/<>?\|\s]+$`` |
| `expirationTime` | `string` | Required | The string describing the expiration timestamp of the certificate |

## Example

```ts
import { Certificate } from 'verizonlib';

const certificate: Certificate = {
  certPem: '"-----BEGIN CERTIFICATE-----\nMIIDrjCCApagAwIBAgICEAEwDQYJKoZIhvcNAQELBQAwUjELMAkGA1UEBhMCQVUx\n...\nuuA1Zog3aBOeeEzp9SEJBMTJRYPXbK4e8Xer+7m98OL/3g==\n-----END CERTIFICATE-----"\n',
  keyPem: '"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDa1lF7DWudshQ5\n...\nJbjD2hacWGzpKzTfn5Mt1frE\n-----END PRIVATE KEY-----"\n',
  caPem: '"-----BEGIN CERTIFICATE-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDa1lF7DWudshQ5\n...\nJbjD2hacWGzpKzTfn5Mt1frE\n-----END CERTIFICATE-----"\n',
  expirationTime: '2017-07-21T17:32:28Z',
};
```


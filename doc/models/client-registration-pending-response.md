
# Client Registration Pending Response

Response for /clients/registration for pending state. It provides a device_id for user to finish registration with PUT API call

## Structure

`ClientRegistrationPendingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceID` | `string` | Required | The generated ID (UUID v4) for the device. It can be used as:<br><br>- the MQTT Client ID when connecting to the Message Exchange system<br>- a parameter when asking for the connection endpoint<br>- a parameter when finishing the device registration<br>- a parameter when unregistering the device |
| `message` | `string` | Required | The reason why the registration is in pending state<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `1024`, *Pattern*: ``^[a-zA-Z0-9~\+\-!@#$%^&*()\`\[\]{=};\"':,.\/<>?\|\s]+$`` |

## Example

```ts
import { ClientRegistrationPendingResponse } from 'verizonlib';

const clientRegistrationPendingResponse: ClientRegistrationPendingResponse = {
  deviceID: 'a4fcd16a-343d-4527-8203-2f46e3e4ff4b',
  message: 'Client registration is in pending state due to the unfinished certificate generation. Please call the PUT API to finish the registration.',
};
```


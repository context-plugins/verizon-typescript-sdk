
# Connection Response V3

response for api/v3/clients/connection

## Structure

`ConnectionResponseV3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mqttURLs` | `string[]` | Required | Array of full MQTT URLs including protocol, host, and port for each available MEC.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `20`, *Maximum Length*: `1024`, *Pattern*: `^(http?mqtt)://[^\s/$.?#].[^\s]*$` |
| `hosts` | `string[] \| undefined` | Optional | Array of hostnames corresponding to each MQTT URL.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `20`, *Maximum Length*: `1024`, *Pattern*: `^[a-zA-Z0-9\.\-_]+$` |
| `ports` | `number[] \| undefined` | Optional | Array of port numbers corresponding to each MQTT URL.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `20`, `>= 1`, `<= 65535` |

## Example

```ts
import { ConnectionResponseV3 } from 'verizonlib';

const connectionResponseV3: ConnectionResponseV3 = {
  mqttURLs: [
    'MqttURLs0',
    'MqttURLs1',
    'MqttURLs2'
  ],
  hosts: [
    'imp-nyc-1.prod-us-east-1.thingspace.verizon.com'
  ],
  ports: [
    8883
  ],
};
```


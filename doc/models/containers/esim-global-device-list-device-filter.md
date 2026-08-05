
# ESIM Global Device List Device Filter

## Class Name

`ESIMGlobalDeviceListDeviceFilter`

## Cases

| Type |
|  --- |
| [`ESIMDeviceId`](../../../doc/models/esim-device-id.md) |
| [`DeviceId2`](../../../doc/models/device-id-2.md) |

## ESIMDeviceId

### Initialization Code

#### Example

```ts
const value: ESIMGlobalDeviceListDeviceFilter = {
  id: '32-digit EID',
  kind: 'eid',
};
```

## DeviceId2

### Initialization Code

#### Example

```ts
const value: ESIMGlobalDeviceListDeviceFilter = {
  id: '15-digit IMEI',
  kind: 'imei',
};
```


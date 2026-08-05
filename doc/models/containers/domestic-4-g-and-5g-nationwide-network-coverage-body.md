
# Domestic 4 G and 5G Nationwide Network Coverage Body

## Class Name

`Domestic4GAnd5gNationwideNetworkCoverageBody`

## Cases

| Type |
|  --- |
| [`GetWirelessCoverageRequest`](../../../doc/models/get-wireless-coverage-request.md) |
| [`GetWirelessCoverageRequestFWA`](../../../doc/models/get-wireless-coverage-request-fwa.md) |

## GetWirelessCoverageRequest

### Initialization Code

#### Example

```ts
const value: Domestic4GAnd5gNationwideNetworkCoverageBody = {
  accountName: '0000123456-00001',
  requestType: 'NW',
  locationType: 'LONGLAT',
  locations: {
  },
  networkTypesList: [
    {
      networkType: 'LTE',
    }
  ],
};
```

## GetWirelessCoverageRequestFWA

### Initialization Code

#### Example

```ts
const value: Domestic4GAnd5gNationwideNetworkCoverageBody = {
  accountName: '0000123456-00001',
  requestType: 'NW',
  locationType: 'ADDRESS',
  locations: {
  },
  networkTypesList: [
    {
      networkType: 'LTE',
    }
  ],
};
```


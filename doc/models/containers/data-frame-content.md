
# Data Frame Content

## Class Name

`DataFrameContent`

## Cases

| Type |
|  --- |
| [`AdvisoryContent`](../../../doc/models/advisory-content.md) |
| [`WorkZoneContent`](../../../doc/models/work-zone-content.md) |
| [`GenericSignContent`](../../../doc/models/generic-sign-content.md) |
| [`SpeedLimitContent`](../../../doc/models/speed-limit-content.md) |
| [`ExitServiceContent`](../../../doc/models/exit-service-content.md) |

## AdvisoryContent

### Initialization Code

#### Example

```ts
const value: DataFrameContent = {
  advisory: [
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```

## WorkZoneContent

### Initialization Code

#### Example

```ts
const value: DataFrameContent = {
  workZone: [
    {
      item: {
        itis: 10,
      },
    },
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```

## GenericSignContent

### Initialization Code

#### Example

```ts
const value: DataFrameContent = {
  genericSign: [
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```

## SpeedLimitContent

### Initialization Code

#### Example

```ts
const value: DataFrameContent = {
  speedLimit: [
    {
      item: {
        itis: 10,
      },
    },
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```

## ExitServiceContent

### Initialization Code

#### Example

```ts
const value: DataFrameContent = {
  exitService: [
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```


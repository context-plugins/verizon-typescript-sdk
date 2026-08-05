
# Limits

List of limitations. These limitations can be used for making the trigger condition more precise by defining speed and motion direction requirements to be met before the messages are sent out.

## Class Name

`Limits`

## Cases

| Type |
|  --- |
| [`SpeedItem`](../../../doc/models/speed-item.md) |
| [`HeadingItem`](../../../doc/models/heading-item.md) |

## SpeedItem

### Initialization Code

#### Example

```ts
const value: Limits = {
  speed: {
    min: 64.76,
    max: 138.18,
  },
};
```

## HeadingItem

### Initialization Code

#### Example

```ts
const value: Limits = {
  heading: {
    min: 70.7,
    max: 144.12,
  },
};
```


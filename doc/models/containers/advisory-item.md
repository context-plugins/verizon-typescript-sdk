
# Advisory Item

The use of ITIS codes interspersed with free text. The complete set of ITIS codes can be found in Volume Two of the SAE J2540 standard.

## Class Name

`AdvisoryItem`

## Cases

| Type |
|  --- |
| [`ITISItemWrapper`](../../../doc/models/itis-item-wrapper.md) |
| [`TextItemWrapper`](../../../doc/models/text-item-wrapper.md) |

## ITISItemWrapper

### Initialization Code

#### Example

```ts
const value: AdvisoryItem = {
  item: {
    itis: 10,
  },
};
```

## TextItemWrapper

### Initialization Code

#### Example

```ts
const value: AdvisoryItem = {
  item: {
    text: 'text2',
  },
};
```



# Create Trigger Rules Body

## Class Name

`CreateTriggerRulesBody`

## Cases

| Type |
|  --- |
| [`AccountLevelCreateTriggerRequest`](../../../doc/models/account-level-create-trigger-request.md) |
| [`AccountLevelObject`](../../../doc/models/account-level-object.md) |
| [`DeviceLevelCreateTriggerRequest`](../../../doc/models/device-level-create-trigger-request.md) |
| [`AccountGroupShareCreateTriggerRequest`](../../../doc/models/account-group-share-create-trigger-request.md) |
| [`AccountShareCreateTriggerRequest`](../../../doc/models/account-share-create-trigger-request.md) |
| [`PayAsYouGoCreateTriggerRequest`](../../../doc/models/pay-as-you-go-create-trigger-request.md) |
| [`Createtriggerchunk`](../../../doc/models/createtriggerchunk.md) |

## AccountLevelCreateTriggerRequest

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  notificationType: 'PerEvent',
  callback: true,
  emailNotification: false,
  notificationGroupName: 'Notification Group Name (User defined)',
  notificationFrequencyFactor: 3,
  notificationFrequencyInterval: 'Daily',
  externalEmailRecipients: 'Email addresses',
  smsNotification: true,
  reminder: true,
  severity: 'Notify',
  active: ActiveEnum.True,
};
```

## AccountLevelObject

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  action: AccountLevelActionEnum.Notify,
};
```

## DeviceLevelCreateTriggerRequest

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```

## AccountGroupShareCreateTriggerRequest

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  triggerName: 'name of the trigger',
  accountName: '0000123456-00001',
  active: ActiveEnum.True,
};
```

## AccountShareCreateTriggerRequest

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```

## PayAsYouGoCreateTriggerRequest

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```

## Createtriggerchunk

### Initialization Code

#### Example

```ts
const value: CreateTriggerRulesBody = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```


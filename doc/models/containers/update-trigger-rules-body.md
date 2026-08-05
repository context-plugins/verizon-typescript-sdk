
# Update Trigger Rules Body

## Class Name

`UpdateTriggerRulesBody`

## Cases

| Type |
|  --- |
| [`AccountLevelUpdateTriggerRequest`](../../../doc/models/account-level-update-trigger-request.md) |
| [`DeviceLevelUpdateTriggerRequest`](../../../doc/models/device-level-update-trigger-request.md) |
| [`AccountGroupShareUpdateTriggerRequest`](../../../doc/models/account-group-share-update-trigger-request.md) |
| [`AccountShareUpdateTriggerRequest`](../../../doc/models/account-share-update-trigger-request.md) |
| [`PayAsYouGoUpdateTriggerRequest`](../../../doc/models/pay-as-you-go-update-trigger-request.md) |
| [`Updatetriggerchunk`](../../../doc/models/updatetriggerchunk.md) |

## AccountLevelUpdateTriggerRequest

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRulesBody = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
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

## DeviceLevelUpdateTriggerRequest

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRulesBody = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```

## AccountGroupShareUpdateTriggerRequest

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRulesBody = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  accountName: '0000123456-00001',
  active: ActiveEnum.True,
};
```

## AccountShareUpdateTriggerRequest

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRulesBody = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```

## PayAsYouGoUpdateTriggerRequest

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRulesBody = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```

## Updatetriggerchunk

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRulesBody = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  active: ActiveEnum.True,
};
```


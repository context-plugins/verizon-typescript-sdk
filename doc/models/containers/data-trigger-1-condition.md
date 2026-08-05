
# Data Trigger 1 Condition

## Class Name

`DataTrigger1Condition`

## Cases

| Type |
|  --- |
| [`ConditionTypeEnum`](../../../doc/models/condition-type-enum.md) |
| [`ConditionObjectCall`](../../../doc/models/condition-object-call.md) |

## ConditionTypeEnum

### Initialization Code

#### Example

```ts
const value: DataTrigger1Condition = ConditionTypeEnum.Aging;
```

## ConditionObjectCall

### Initialization Code

#### Example

```ts
const value: DataTrigger1Condition = {
  conditionType: ConditionTypeEnum.Aging,
  comparitor: ComparitorEnum.Gt,
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
  cycleType: RulesCycleTypeEnum.Daily,
};
```


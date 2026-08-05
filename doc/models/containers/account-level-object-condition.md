
# Account Level Object Condition

## Class Name

`AccountLevelObjectCondition`

## Cases

| Type |
|  --- |
| [`ConditionTypeEnum`](../../../doc/models/condition-type-enum.md) |
| [`ConditionObjectCall`](../../../doc/models/condition-object-call.md) |

## ConditionTypeEnum

### Initialization Code

#### Example

```ts
const value: AccountLevelObjectCondition = ConditionTypeEnum.Aging;
```

## ConditionObjectCall

### Initialization Code

#### Example

```ts
const value: AccountLevelObjectCondition = {
  conditionType: ConditionTypeEnum.Aging,
  comparitor: ComparitorEnum.Gt,
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
  cycleType: RulesCycleTypeEnum.Daily,
};
```


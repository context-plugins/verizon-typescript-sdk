
# Price Plan Trigger 2 Condition

## Class Name

`PricePlanTrigger2Condition`

## Cases

| Type |
|  --- |
| [`ConditionTypeEnum`](../../../doc/models/condition-type-enum.md) |
| [`ConditionObjectCall`](../../../doc/models/condition-object-call.md) |

## ConditionTypeEnum

### Initialization Code

#### Example

```ts
const value: PricePlanTrigger2Condition = ConditionTypeEnum.Aging;
```

## ConditionObjectCall

### Initialization Code

#### Example

```ts
const value: PricePlanTrigger2Condition = {
  conditionType: ConditionTypeEnum.Aging,
  comparitor: ComparitorEnum.Gt,
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
  cycleType: RulesCycleTypeEnum.Daily,
};
```


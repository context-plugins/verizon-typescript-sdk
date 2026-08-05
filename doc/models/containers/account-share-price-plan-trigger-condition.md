
# Account Share Price Plan Trigger Condition

## Class Name

`AccountSharePricePlanTriggerCondition`

## Cases

| Type |
|  --- |
| [`ConditionTypeEnum`](../../../doc/models/condition-type-enum.md) |
| [`ConditionObjectCall`](../../../doc/models/condition-object-call.md) |

## ConditionTypeEnum

### Initialization Code

#### Example

```ts
const value: AccountSharePricePlanTriggerCondition = ConditionTypeEnum.Aging;
```

## ConditionObjectCall

### Initialization Code

#### Example

```ts
const value: AccountSharePricePlanTriggerCondition = {
  conditionType: ConditionTypeEnum.Aging,
  comparitor: ComparitorEnum.Gt,
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
  cycleType: RulesCycleTypeEnum.Daily,
};
```


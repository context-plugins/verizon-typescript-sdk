
# Upgrade Status Enum

The status of the upgrades that you want to retrieve.

## Enumeration

`UpgradeStatusEnum`

## Fields

| Name |
|  --- |
| `RequestPending` |
| `Queued` |
| `RequestFailed` |
| `InProgress` |
| `Finished` |
| `UpgradeFailed` |

## Example

```ts
import { UpgradeStatusEnum } from 'verizonlib';

const upgradeStatus = UpgradeStatusEnum.RequestFailed;
```


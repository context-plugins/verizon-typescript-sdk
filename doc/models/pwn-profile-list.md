
# PWN Profile List

## Structure

`PWNProfileList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profiles` | [`PWNProfile[] \| undefined`](../../doc/models/pwn-profile.md) | Optional | - |

## Example

```ts
import { PWNProfileList } from 'verizonlib';

const pWNProfileList: PWNProfileList = {
  profiles: [
    {
      profileId: 'HSS-EsmProfile_Enterprise',
      profileName: 'HSS EsmProfile Enterprise',
    }
  ],
};
```


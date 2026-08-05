
# Text Item Content

An item object wrapping a text value.

## Structure

`TextItemContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Required | Simple text used with ITIS codes. (Text taken from SAE J2540.)<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `500`, *Pattern*: ``^[\w\+\-!()\`\[\]{=};\"':,.\/<>?\|\s]+$`` |

## Example

```ts
import { TextItemContent } from 'verizonlib';

const textItemContent: TextItemContent = {
  text: 'text0',
};
```


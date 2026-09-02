import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { historyAttributeValueSchema, type HistoryAttributeValue } from "./history-attribute-value.js";

export type History = {
  accountName: string;
  device: Device;
  attributes?: HistoryAttributeValue;
};

export const historySchema: Schema<History> = s.object<History>({
  accountName: s.string(),
  device: deviceSchema,
  attributes: s.optional(s.lazy(() => historyAttributeValueSchema)),
});

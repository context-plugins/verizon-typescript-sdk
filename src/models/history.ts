import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { historyAttributeValueSchema, type HistoryAttributeValue } from "./history-attribute-value.js";

/** History data for a selected device and its attributes at a specific time. */
export type History = {
  /**
   * The name of the billing account for which you want retrieve history data. An account name is
   * usually numeric, and must include any leading zeros.
   */
  accountName: string;
  /** Identifies a particular IoT device. */
  device: Device;
  /** Streaming RF parameter for which you want to retrieve history data. */
  attributes?: HistoryAttributeValue;
};

export const historySchema: Schema<History> = s.object<History>({
  accountName: s.string(),
  device: deviceSchema,
  attributes: s.optional(s.lazy(() => historyAttributeValueSchema)),
});

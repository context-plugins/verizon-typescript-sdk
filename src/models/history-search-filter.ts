import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import {
  historySearchFilterAttributesSchema,
  type HistorySearchFilterAttributes,
} from "./history-search-filter-attributes.js";

/** The selected device and attributes for which a request should retrieve data. */
export type HistorySearchFilter = {
  /** Account name identifier. */
  accountName: string;
  /** Identifies a particular IoT device. */
  device: Device;
  /** Streaming RF parameters for which you want to retrieve history data. */
  attributes?: HistorySearchFilterAttributes;
};

export const historySearchFilterSchema: Schema<HistorySearchFilter> = s.object<HistorySearchFilter>({
  accountName: s.string(),
  device: deviceSchema,
  attributes: s.optional(s.lazy(() => historySearchFilterAttributesSchema)),
});

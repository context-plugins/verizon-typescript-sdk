import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import {
  historySearchFilterAttributesSchema,
  type HistorySearchFilterAttributes,
} from "./history-search-filter-attributes.js";

export type HistorySearchFilter = {
  accountName: string;
  device: Device;
  attributes?: HistorySearchFilterAttributes;
};

export const historySearchFilterSchema: Schema<HistorySearchFilter> = s.object<HistorySearchFilter>({
  accountName: s.string(),
  device: deviceSchema,
  attributes: s.optional(s.lazy(() => historySearchFilterAttributesSchema)),
});

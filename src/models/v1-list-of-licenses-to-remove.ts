import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of cancellation candidate devices. */
export type V1ListOfLicensesToRemove = {
  /** The total number of devices on the list. */
  count?: number;
  /** True if there are more devices to retrieve. */
  hasMoreData?: boolean;
  /** The date and time that the list was last updated. */
  updateTime?: Date;
  /** The IMEIs of the devices. */
  deviceList?: string[];
};

export const v1ListOfLicensesToRemoveSchema: Schema<V1ListOfLicensesToRemove> =
  s.object<V1ListOfLicensesToRemove>({
    count: s.optional(s.int()),
    hasMoreData: s.optional(s.boolean()),
    updateTime: s.optional(s.dateTime()),
    deviceList: s.optional(s.array(s.string())),
  });

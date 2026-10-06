import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of licenses assigned. */
export type V1ListOfLicensesToRemoveResult = {
  /** The total number of devices on the cancellation candidate list. */
  count?: number;
  /** The IMEIs of the devices. */
  deviceList?: string[];
};

export const v1ListOfLicensesToRemoveResultSchema: Schema<V1ListOfLicensesToRemoveResult> =
  s.object<V1ListOfLicensesToRemoveResult>({
    count: s.optional(s.int()),
    deviceList: s.optional(s.array(s.string())),
  });

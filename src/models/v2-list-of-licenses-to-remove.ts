import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A list of license cancellation candidate devices. */
export type V2ListOfLicensesToRemove = {
  /** Cancellation candidate devices count. */
  count: number;
  /** Flag to indicat more devices. */
  hasMoreData: boolean;
  /** Last update time. */
  updateTime: string;
  /** Device IMEI list. */
  deviceList: string[];
};

export const v2ListOfLicensesToRemoveSchema: Schema<V2ListOfLicensesToRemove> =
  s.object<V2ListOfLicensesToRemove>({
    count: s.int(),
    hasMoreData: s.boolean(),
    updateTime: s.string(),
    deviceList: s.array(s.string()),
  });

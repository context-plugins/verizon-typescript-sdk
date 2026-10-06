import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of created license cancellation devices. */
export type V2ListOfLicensesToRemoveResult = {
  /** The number of devices. */
  count: number;
  /** Device IMEI list. */
  deviceList: string[];
};

export const v2ListOfLicensesToRemoveResultSchema: Schema<V2ListOfLicensesToRemoveResult> =
  s.object<V2ListOfLicensesToRemoveResult>({
    count: s.int(),
    deviceList: s.array(s.string()),
  });

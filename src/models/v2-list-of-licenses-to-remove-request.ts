import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** License cancellation candidate devices. */
export type V2ListOfLicensesToRemoveRequest = {
  /** List creation option. */
  type?: string;
  /** The number of devices. */
  count?: number;
  /** Device IMEI list. */
  deviceList: string[];
};

export const v2ListOfLicensesToRemoveRequestSchema: Schema<V2ListOfLicensesToRemoveRequest> =
  s.object<V2ListOfLicensesToRemoveRequest>({
    type: s.optional(s.string()),
    count: s.optional(s.int()),
    deviceList: s.array(s.string()),
  });

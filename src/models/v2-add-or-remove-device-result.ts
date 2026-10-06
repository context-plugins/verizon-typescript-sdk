import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Add or remove devices from the existing software upgrade information. */
export type V2AddOrRemoveDeviceResult = {
  /** Account identifier. */
  accountName: string;
  /** Campaign identifier. */
  campaignId: string;
  /** Request identifier. */
  requestId: string;
};

export const v2AddOrRemoveDeviceResultSchema: Schema<V2AddOrRemoveDeviceResult> =
  s.object<V2AddOrRemoveDeviceResult>({
    accountName: s.string(),
    campaignId: s.string(),
    requestId: s.string(),
  });

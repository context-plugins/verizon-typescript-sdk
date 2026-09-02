import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2AddOrRemoveDeviceResult = {
  accountName: string;
  campaignId: string;
  requestId: string;
};

export const v2AddOrRemoveDeviceResultSchema: Schema<V2AddOrRemoveDeviceResult> =
  s.object<V2AddOrRemoveDeviceResult>({
    accountName: s.string(),
    campaignId: s.string(),
    requestId: s.string(),
  });

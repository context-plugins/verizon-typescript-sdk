import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbiCarrierInformation5 = {
  carrierName?: string;
};

export const gbiCarrierInformation5Schema: Schema<GbiCarrierInformation5> = s.object<GbiCarrierInformation5>({
  carrierName: s.optional(s.string()),
});

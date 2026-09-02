import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gbiprimaryPlaceofuse5Schema, type GbiprimaryPlaceofuse5 } from "./gbiprimary-placeofuse5.js";

export type GbiaddressAndcustomerinfo5 = {
  primaryPlaceofuse?: GbiprimaryPlaceofuse5;
};

export const gbiaddressAndcustomerinfo5Schema: Schema<GbiaddressAndcustomerinfo5> =
  s.object<GbiaddressAndcustomerinfo5>({
    primaryPlaceofuse: s.optional(s.lazy(() => gbiprimaryPlaceofuse5Schema)),
  });

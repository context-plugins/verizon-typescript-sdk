import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { carriercode1Schema, type Carriercode1 } from "../carriercode1.js";

export type AccountGroupShareThreshold = Carriercode1;

export const accountGroupShareThresholdSchema: Schema<AccountGroupShareThreshold> =
  s.of<AccountGroupShareThreshold>(s.union([s.lazy(() => carriercode1Schema)]));

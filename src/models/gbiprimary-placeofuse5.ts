import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gbiAddress5Schema, type GbiAddress5 } from "./gbi-address5.js";
import { gbiCustomerName5Schema, type GbiCustomerName5 } from "./gbi-customer-name5.js";

export type GbiprimaryPlaceofuse5 = {
  address?: GbiAddress5;
  customerName?: GbiCustomerName5;
};

export const gbiprimaryPlaceofuse5Schema: Schema<GbiprimaryPlaceofuse5> = s.object<GbiprimaryPlaceofuse5>({
  address: s.optional(s.lazy(() => gbiAddress5Schema)),
  customerName: s.optional(s.lazy(() => gbiCustomerName5Schema)),
});

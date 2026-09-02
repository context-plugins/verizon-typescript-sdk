import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerNameSchema, type CustomerName } from "./customer-name.js";

export type PlaceOfUse = {
  address: Address;
  customerName: CustomerName;
};

export const placeOfUseSchema: Schema<PlaceOfUse> = s.object<PlaceOfUse>({
  address: addressSchema,
  customerName: customerNameSchema,
});

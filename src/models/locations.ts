import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressItemSchema, type AddressItem } from "./address-item.js";

export type Locations = {
  addressList?: AddressItem[];
};

export const locationsSchema: Schema<Locations> = s.object<Locations>({
  addressList: s.optional(s.array(s.lazy(() => addressItemSchema))),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type Addressquery = {
  address?: Address[];
};

export const addressquerySchema: Schema<Addressquery> = s.object<Addressquery>({
  address: s.optional(s.array(s.lazy(() => addressSchema))),
});

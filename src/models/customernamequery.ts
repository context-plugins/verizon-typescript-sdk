import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerNameSchema, type CustomerName } from "./customer-name.js";

export type Customernamequery = {
  customerName?: CustomerName[];
};

export const customernamequerySchema: Schema<Customernamequery> = s.object<Customernamequery>({
  customerName: s.optional(s.array(s.lazy(() => customerNameSchema))),
});

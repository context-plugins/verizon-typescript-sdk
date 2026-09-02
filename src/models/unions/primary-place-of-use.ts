import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressquerySchema, type Addressquery } from "../addressquery.js";
import { customernamequerySchema, type Customernamequery } from "../customernamequery.js";

export type PrimaryPlaceOfUse = Customernamequery | Addressquery;

export const primaryPlaceOfUseSchema: Schema<PrimaryPlaceOfUse> = s.of<PrimaryPlaceOfUse>(
  s.union([s.lazy(() => customernamequerySchema), s.lazy(() => addressquerySchema)]),
);

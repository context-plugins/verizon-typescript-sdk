import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { gbikeyValue15Schema, type GbikeyValue15 } from "../gbikey-value15.js";

export type CustomField = GbikeyValue15;

export const customFieldSchema: Schema<CustomField> = s.of<CustomField>(
  s.union([s.lazy(() => gbikeyValue15Schema)]),
);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbiCustomerName5 = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  title?: string;
  suffex?: string;
};

export const gbiCustomerName5Schema: Schema<GbiCustomerName5> = s.object<GbiCustomerName5>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  middleName: s.optional(s.string()),
  title: s.optional(s.string()),
  suffex: s.optional(s.string()),
});
